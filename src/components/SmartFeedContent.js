import React, { useEffect, useState } from "react";
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
      // Reset pagination state
      setArticles([]);
      setCurrentPage(1);
      setHasMoreContent(true);
      seenArticleIds.clear();
      fetchContent(1);
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

        if (preserveExisting) {
          setArticles((prevArticles) => [
            ...prevArticles,
            ...sortedNewArticles,
          ]);
        } else {
          setArticles(sortedNewArticles);
        }

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

        if (preserveExisting) {
          setArticles((prevArticles) => [...prevArticles, ...newArticles]);
        } else {
          setArticles(newArticles);
        }

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

  // Determine if we should show the personalization tip
  const showPersonalizationTip = user && bookmarkedRoadmaps.length === 0;

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
          />
        )}
      </div>
      <Footer />

      <ScrollToTop />
    </div>
  );
};

export default SmartFeedContent;
