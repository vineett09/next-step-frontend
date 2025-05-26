import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import SmartFeed from "../components/SmartFeed";
import "../styles/SmartFeed.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SmartFeedContent = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreContent, setHasMoreContent] = useState(true);
  const [bookmarkedRoadmaps, setBookmarkedRoadmaps] = useState([]);
  const [availableSources, setAvailableSources] = useState([]);
  const [bookmarksLoaded, setBookmarksLoaded] = useState(false);

  // Track seen articles to avoid duplicates when paginating
  const [seenArticleIds] = useState(new Set());

  // Refs to track session state
  const sessionKeyRef = useRef(null);
  const isDataFromCacheRef = useRef(false);

  // Generate a unique session key based on user state
  const generateSessionKey = () => {
    if (token && bookmarkedRoadmaps.length > 0) {
      // For logged-in users with bookmarks
      const bookmarkIds = [...bookmarkedRoadmaps].sort().join(",");
      return `smartfeed_user_${user?.id || "unknown"}_bookmarks_${btoa(
        bookmarkIds
      ).slice(0, 20)}`;
    } else if (token) {
      // For logged-in users without bookmarks
      return `smartfeed_user_${user?.id || "unknown"}_no_bookmarks`;
    } else {
      // For anonymous users
      return "smartfeed_anonymous";
    }
  };

  // Save feed data to memory (could be enhanced with IndexedDB for larger datasets)
  const saveFeedToCache = (feedData) => {
    if (!sessionKeyRef.current) return;

    try {
      const cacheData = {
        articles: feedData.articles,
        currentPage: feedData.currentPage,
        hasMoreContent: feedData.hasMoreContent,
        seenIds: Array.from(seenArticleIds),
        timestamp: Date.now(),
        bookmarkedRoadmaps: [...bookmarkedRoadmaps],
      };

      // Store in sessionStorage (will persist until tab is closed)
      sessionStorage.setItem(sessionKeyRef.current, JSON.stringify(cacheData));

      // Also store in a module-level cache for same-session navigation
      window.smartFeedCache = window.smartFeedCache || {};
      window.smartFeedCache[sessionKeyRef.current] = cacheData;
    } catch (error) {
      console.error("Error saving feed to cache:", error);
    }
  };

  // Load feed data from memory
  const loadFeedFromCache = () => {
    if (!sessionKeyRef.current) return null;

    try {
      // First try in-memory cache (fastest)
      if (
        window.smartFeedCache &&
        window.smartFeedCache[sessionKeyRef.current]
      ) {
        const cacheData = window.smartFeedCache[sessionKeyRef.current];

        // Check if cache is not too old (optional: expire after 30 minutes)
        const cacheAge = Date.now() - cacheData.timestamp;
        if (cacheAge < 30 * 60 * 1000) {
          // 30 minutes
          return cacheData;
        }
      }

      // Fallback to sessionStorage
      const cachedData = sessionStorage.getItem(sessionKeyRef.current);
      if (cachedData) {
        const parsed = JSON.parse(cachedData);

        // Check if cache is not too old
        const cacheAge = Date.now() - parsed.timestamp;
        if (cacheAge < 30 * 60 * 1000) {
          // 30 minutes
          // Update in-memory cache
          window.smartFeedCache = window.smartFeedCache || {};
          window.smartFeedCache[sessionKeyRef.current] = parsed;
          return parsed;
        } else {
          // Remove expired cache
          sessionStorage.removeItem(sessionKeyRef.current);
        }
      }
    } catch (error) {
      console.error("Error loading feed from cache:", error);
    }

    return null;
  };

  // Clear cache when user logs out or session changes
  const clearFeedCache = () => {
    try {
      // Clear all smartfeed related sessionStorage items
      Object.keys(sessionStorage).forEach((key) => {
        if (key.startsWith("smartfeed_")) {
          sessionStorage.removeItem(key);
        }
      });

      // Clear in-memory cache
      if (window.smartFeedCache) {
        Object.keys(window.smartFeedCache).forEach((key) => {
          if (key.startsWith("smartfeed_")) {
            delete window.smartFeedCache[key];
          }
        });
      }
    } catch (error) {
      console.error("Error clearing feed cache:", error);
    }
  };

  // Clear cache when component unmounts or user changes
  useEffect(() => {
    return () => {
      // Only clear cache if user is logging out (token becomes null)
      if (!token && sessionKeyRef.current) {
        clearFeedCache();
      }
    };
  }, [token]);

  useEffect(() => {
    // Fetch available content sources
    const fetchSources = async () => {
      try {
        const sourcesRes = await axios.get(
          `${BACKEND_URL}/api/content/sources`
        );
        setAvailableSources(sourcesRes.data.sources);
      } catch (error) {
        console.error("Error fetching content sources:", error);
      }
    };

    fetchSources();
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);

      // Only fetch bookmarks if user is logged in
      if (token) {
        try {
          const bookmarksRes = await axios.get(
            `${BACKEND_URL}/api/bookmark/bookmarks`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setBookmarkedRoadmaps(bookmarksRes.data || []);
        } catch (error) {
          console.error("Error fetching bookmarks:", error);
          setError(
            "Failed to load your bookmarks. Using default content instead."
          );
        } finally {
          setBookmarksLoaded(true);
        }
      } else {
        // For non-logged in users, mark bookmarks as loaded immediately
        setBookmarksLoaded(true);
      }
    };

    fetchInitialData();
  }, [token]);

  // Only fetch content once we know if the user has bookmarks or not
  useEffect(() => {
    if (bookmarksLoaded) {
      // Generate session key based on current user state
      sessionKeyRef.current = generateSessionKey();

      // Try to load from cache first
      const cachedData = loadFeedFromCache();

      if (
        cachedData &&
        JSON.stringify(cachedData.bookmarkedRoadmaps) ===
          JSON.stringify(bookmarkedRoadmaps)
      ) {
        // Restore state from cache
        setArticles(cachedData.articles);
        setCurrentPage(cachedData.currentPage);
        setHasMoreContent(cachedData.hasMoreContent);

        // Restore seen article IDs
        seenArticleIds.clear();
        cachedData.seenIds.forEach((id) => seenArticleIds.add(id));

        isDataFromCacheRef.current = true;
        setLoading(false);
      } else {
        // Reset pagination state and fetch fresh data
        setArticles([]);
        setCurrentPage(1);
        setHasMoreContent(true);
        seenArticleIds.clear();
        isDataFromCacheRef.current = false;
        fetchContent(1);
      }
    }
  }, [bookmarksLoaded]);

  const fetchContent = async (page = 1, preserveExisting = false) => {
    if (!bookmarksLoaded) return; // Don't fetch if bookmarks aren't loaded yet

    try {
      setLoading(true);
      setError(null);

      // Case 1: User is logged in with bookmarks
      if (token && bookmarkedRoadmaps.length > 0) {
        const allNewArticles = [];

        for (let roadmapId of bookmarkedRoadmaps) {
          const contentRes = await axios.get(
            `${BACKEND_URL}/api/content/smart-feed/${roadmapId}?page=${page}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          // Extract articles and pagination data
          const {
            articles: roadmapArticles,
            pagination,
            availableSources,
          } = contentRes.data;

          // Only add articles we haven't seen before
          const newArticles = roadmapArticles.filter(
            (article) => !seenArticleIds.has(article.articleId)
          );

          // Track newly added articles
          newArticles.forEach((article) =>
            seenArticleIds.add(article.articleId)
          );

          allNewArticles.push(...newArticles);

          // Update pagination status based on this roadmap's result
          if (!pagination.hasMore) {
            setHasMoreContent(false);
          }
        }

        // Sort articles by date (newest first)
        const sortedNewArticles = allNewArticles.sort(
          (a, b) => new Date(b.published_at) - new Date(a.published_at)
        );

        let updatedArticles;
        if (preserveExisting) {
          updatedArticles = [...articles, ...sortedNewArticles];
          setArticles(updatedArticles);
        } else {
          updatedArticles = sortedNewArticles;
          setArticles(updatedArticles);
        }

        // Cache the updated data
        saveFeedToCache({
          articles: updatedArticles,
          currentPage: page,
          hasMoreContent: allNewArticles.length > 0,
        });

        // If we didn't get any new articles, we're at the end
        if (allNewArticles.length === 0) {
          setHasMoreContent(false);
        }
      }
      // Case 2: User is not logged in or has no bookmarks
      else {
        const defaultContentRes = await axios.get(
          `${BACKEND_URL}/api/content/smart-feed/default?page=${page}`
        );

        const { articles: defaultArticles, pagination } =
          defaultContentRes.data;

        // Only add articles we haven't seen before
        const newArticles = defaultArticles.filter(
          (article) => !seenArticleIds.has(article.articleId)
        );

        // Track newly added articles
        newArticles.forEach((article) => seenArticleIds.add(article.articleId));

        let updatedArticles;
        if (preserveExisting) {
          updatedArticles = [...articles, ...newArticles];
          setArticles(updatedArticles);
        } else {
          updatedArticles = newArticles;
          setArticles(updatedArticles);
        }

        // Cache the updated data
        saveFeedToCache({
          articles: updatedArticles,
          currentPage: page,
          hasMoreContent: pagination.hasMore && newArticles.length > 0,
        });

        setHasMoreContent(pagination.hasMore && newArticles.length > 0);
      }
    } catch (error) {
      console.error("Error loading weekly content:", error);
      setError("Failed to load content. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Load more articles when requested
  const handleLoadMore = (filter, sortOrder) => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchContent(nextPage, true); // true = preserve existing articles
  };

  // Add a refresh function to force reload data
  const handleRefresh = () => {
    // Clear current cache
    if (sessionKeyRef.current) {
      try {
        sessionStorage.removeItem(sessionKeyRef.current);
        if (window.smartFeedCache) {
          delete window.smartFeedCache[sessionKeyRef.current];
        }
      } catch (error) {
        console.error("Error clearing cache:", error);
      }
    }

    // Reset state and fetch fresh data
    setArticles([]);
    setCurrentPage(1);
    setHasMoreContent(true);
    seenArticleIds.clear();
    setError(null);
    fetchContent(1);
  };

  // Determine if we should show the personalization tip
  const showPersonalizationTip = user && bookmarkedRoadmaps.length === 0;
  const showPersonalizationTip2 = user && bookmarkedRoadmaps.length > 0;

  return (
    <div className="weekly-content-page">
      <Navbar />
      <div className="weekly-digest-page">
        {/* Personalization tip for logged-in users without bookmarks */}
        {showPersonalizationTip && (
          <div className="personalization-tip">
            <p>
              💡 Bookmarking roadmaps will get you a personalized feed based on
              your interests!
            </p>
          </div>
        )}
        {showPersonalizationTip2 && (
          <div className="personalization-tip">
            <p>
              💡 This feed is based on your bookmarks and personalized for you!
            </p>
          </div>
        )}

        {/* Show tip for non logged-in users */}
        {!user && (
          <div className="personalization-tip">
            <p>
              💡 Log in and bookmark roadmaps to get a personalized feed based
              on your interests!
            </p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p className="error-text">{error}</p>
            <button
              className="retry-button"
              onClick={() => {
                setCurrentPage(1);
                fetchContent(1);
              }}
            >
              Try Again
            </button>
          </div>
        )}

        {!error && (
          <SmartFeed
            articles={articles}
            onLoadMore={handleLoadMore}
            loading={loading}
            hasMoreContent={hasMoreContent}
            onRefresh={handleRefresh}
            isDataFromCache={isDataFromCacheRef.current}
          />
        )}
      </div>
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default SmartFeedContent;
