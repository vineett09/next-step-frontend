import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { IoClose, IoSend } from "react-icons/io5";
import "../styles/roadmaps/ChatBot.css";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

const Chatbot = React.forwardRef(({ roadmapTitle, data }, ref) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // New state for typing indicator
  const messagesEndRef = useRef(null);
  const { user, token } = useSelector((state) => state.auth);
  const isAuthenticated = user && token;
  const [usageCount, setUsageCount] = useState(0);
  const [remainingCount, setRemainingCount] = useState(10);

  // Load messages from localStorage when component mounts
  useEffect(() => {
    if (isAuthenticated && user) {
      // We don't want to load messages that were just stored
      // Only load if the current messages array is empty
      if (messages.length === 0) {
        const storedMessages = localStorage.getItem(`chat_messages_${user.id}`);
        if (storedMessages) {
          setMessages(JSON.parse(storedMessages));
        }
      }
      fetchChatbotUsage();
    }
  }, [isAuthenticated, user]);

  // Add this useEffect hook to your component
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".chatbot-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (isAuthenticated && user && messages.length > 0) {
      localStorage.setItem(
        `chat_messages_${user.id}`,
        JSON.stringify(messages)
      );
    }
  }, [messages, isAuthenticated, user]);

  useEffect(() => {
    if (ref) {
      ref.current = {
        openWithNodeQuery: (node) => {
          handleNodeQuery(node);
        },
      };
    }
  }, [ref]);

  const handleNodeQuery = (node) => {
    if (!isAuthenticated) {
      setIsOpen(true);
      return;
    }

    setIsOpen(true);
    const nodeQuery = `Tell me about "${node.name}" in the ${roadmapTitle} roadmap. `;

    // Create user message
    const userMessage = {
      sender: "user",
      text: nodeQuery,
      timestamp: new Date().toISOString(),
    };

    // Update messages state with the user message FIRST using a function to ensure we have the latest state
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];

      // Show typing indicator
      setIsTyping(true);

      // After updating the state, send to API
      axios
        .post(
          "/api/chatbot",
          {
            message: nodeQuery,
            roadmapTitle,
            roadmapData: JSON.stringify(data),
            nodeId: node.id || node.name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // Hide typing indicator
          setIsTyping(false);

          const botMessage = {
            sender: "bot",
            text: formatText(response.data.reply),
            timestamp: new Date().toISOString(),
            roadmap: roadmapTitle,
          };

          // Use a functional update to ensure we're working with the latest state
          setMessages((currentMessages) => [...currentMessages, botMessage]);
          setUsageCount(response.data.usageCount);
          setRemainingCount(response.data.remainingCount);
        })
        .catch((error) => {
          // Hide typing indicator
          setIsTyping(false);

          console.error("Chatbot error:", error);
          // Again use functional update
          setMessages((currentMessages) => [
            ...currentMessages,
            {
              sender: "bot",
              text: "<p>Sorry, I couldn't process that request.</p>",
              timestamp: new Date().toISOString(),
              roadmap: roadmapTitle,
            },
          ]);
        });

      return updatedMessages;
    });
  };

  const fetchChatbotUsage = async () => {
    if (!isAuthenticated || !user) return;

    try {
      const response = await axios.get("/api/chatbot/usage", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsageCount(response.data.usageCount);
      setRemainingCount(response.data.remainingCount);
    } catch (error) {
      console.error("Error fetching chatbot usage:", error);
    }
  };

  // Enhanced formatText function for better response formatting
  const formatText = (text) => {
    if (!text) return "";

    let sanitizedText = DOMPurify.sanitize(text);

    // Code blocks with syntax highlighting and scrollable containers
    sanitizedText = sanitizedText.replace(
      /```([a-zA-Z]*)\n([\s\S]*?)\n```/g,
      '<div class="code-container"><pre class="code-block $1"><code>$2</code></pre></div>'
    );

    // Inline code with proper breaking
    sanitizedText = sanitizedText.replace(
      /`([^`]+)`/g,
      '<code class="inline-code">$1</code>'
    );

    // Headers (with word-break)
    sanitizedText = sanitizedText.replace(
      /^# (.*$)/gm,
      '<h3 class="bot-heading">$1</h3>'
    );
    sanitizedText = sanitizedText.replace(
      /^## (.*$)/gm,
      '<h4 class="bot-heading">$1</h4>'
    );
    sanitizedText = sanitizedText.replace(
      /^### (.*$)/gm,
      '<h5 class="bot-heading">$1</h5>'
    );

    // Numbered lists with proper formatting
    sanitizedText = sanitizedText.replace(
      /^(\d+\.\s.*)$/gm,
      "<li class='numbered-item'>$1</li>"
    );
    sanitizedText = sanitizedText.replace(
      /(<li class='numbered-item'>.*?<\/li>)+/gs,
      "<ol class='bot-list'>$&</ol>"
    );

    // Bullet points with proper formatting
    sanitizedText = sanitizedText.replace(
      /^([\*\-\•]\s.*)$/gm,
      "<li class='bullet-item'>$1</li>"
    );
    sanitizedText = sanitizedText.replace(
      /(<li class='bullet-item'>.*?<\/li>)+/gs,
      "<ul class='bot-list'>$&</ul>"
    );

    // Resource links with special formatting and word breaking
    sanitizedText = sanitizedText.replace(
      /\[Resource\]\((https?:\/\/[^\s)]+)\)/g,
      '<a class="resource-link" href="$1" target="_blank" rel="noopener noreferrer">📚 Resource</a>'
    );

    // Regular links with word breaking
    sanitizedText = sanitizedText.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a class="normal-link" href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Callout boxes for important information
    sanitizedText = sanitizedText.replace(
      /> ⚠️ (.*?)(?:\n\n|$)/gs,
      '<div class="callout warning"><span class="callout-icon">⚠️</span><span class="callout-text">$1</span></div>'
    );

    sanitizedText = sanitizedText.replace(
      /> 💡 (.*?)(?:\n\n|$)/gs,
      '<div class="callout tip"><span class="callout-icon">💡</span><span class="callout-text">$1</span></div>'
    );

    sanitizedText = sanitizedText.replace(
      /> 📌 (.*?)(?:\n\n|$)/gs,
      '<div class="callout info"><span class="callout-icon">📌</span><span class="callout-text">$1</span></div>'
    );

    // Responsive tables for structured data
    const tableRegex = /\|(.+)\|\n\|([-:]+\|)+\n((?:\|.+\|\n)+)/g;
    sanitizedText = sanitizedText.replace(
      tableRegex,
      (match, headers, separator, rows) => {
        const headerCells = headers
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean);

        let tableHTML =
          '<div class="table-wrapper"><table class="bot-table"><thead><tr>';
        headerCells.forEach((cell) => {
          tableHTML += `<th>${cell.trim()}</th>`;
        });
        tableHTML += "</tr></thead><tbody>";

        const rowLines = rows.trim().split("\n");
        rowLines.forEach((row) => {
          const cells = row
            .split("|")
            .map((cell) => cell.trim())
            .filter(Boolean);
          tableHTML += "<tr>";
          cells.forEach((cell) => {
            tableHTML += `<td>${cell}</td>`;
          });
          tableHTML += "</tr>";
        });

        tableHTML += "</tbody></table></div>";
        return tableHTML;
      }
    );

    // Handle paragraphs
    sanitizedText = sanitizedText.replace(
      /\n\n/g,
      "</p><p class='bot-paragraph'>"
    );

    // Handle single line breaks
    sanitizedText = sanitizedText.replace(/\n/g, "<br>");

    // Handle bold text
    sanitizedText = sanitizedText.replace(
      /(\*\*|__)(.*?)\1/g,
      "<strong>$2</strong>"
    );

    // Handle italic text
    sanitizedText = sanitizedText.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

    // Ensure the text starts with a paragraph tag if not already a formatted element
    if (!sanitizedText.startsWith("<")) {
      sanitizedText = `<p class='bot-paragraph'>${sanitizedText}</p>`;
    }

    return sanitizedText;
  };

  const handleSend = async () => {
    if (!input.trim() || !isAuthenticated) return;

    const userMessage = {
      sender: "user",
      text: input,
      timestamp: new Date().toISOString(),
    };

    // Use functional update to ensure we always have the latest state
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, userMessage];

      // Reset input field immediately
      setInput("");

      // Show typing indicator
      setIsTyping(true);

      // Send message to API
      axios
        .post(
          "/api/chatbot",
          {
            message: input,
            roadmapTitle,
            roadmapData: JSON.stringify(data),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          // Hide typing indicator
          setIsTyping(false);

          const botMessage = {
            sender: "bot",
            text: formatText(response.data.reply),
            timestamp: new Date().toISOString(),
            roadmap: roadmapTitle,
          };

          // Use functional update again for the bot's response
          setMessages((currentMessages) => [...currentMessages, botMessage]);
          setUsageCount(response.data.usageCount);
          setRemainingCount(response.data.remainingCount);
        })
        .catch((error) => {
          // Hide typing indicator
          setIsTyping(false);

          console.error("Chatbot error:", error);
          setMessages((currentMessages) => [
            ...currentMessages,
            {
              sender: "bot",
              text: "<p>Sorry, I couldn't process that request.</p>",
              timestamp: new Date().toISOString(),
              roadmap: roadmapTitle,
            },
          ]);
        });

      return updatedMessages;
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const clearChatHistory = () => {
    if (isAuthenticated && user) {
      localStorage.removeItem(`chat_messages_${user.id}`);
      setMessages([]);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      {!isOpen && (
        <div
          className="chatbot-icon"
          onClick={() => setIsOpen(true)}
          onTouchStart={handleTouchStart}
        >
          <button className="AI-button">Ask AI✨</button>
        </div>
      )}

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            Chat
            <div className="chatbot-usage">Prompts: {usageCount}/10 Today</div>
            <div className="chatbot-actions">
              {isAuthenticated && messages.length > 0 && (
                <button
                  className="clear-chat-btn"
                  onClick={clearChatHistory}
                  title="Clear chat history"
                >
                  Clear History
                </button>
              )}
              <IoClose
                className="close-icon"
                size={22}
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>

          <div className="chatbot-messages">
            {!isAuthenticated && (
              <div className="chat-message bot">
                <span>
                  Please login to use the chatbot.{" "}
                  <a href="/login">Click here to login</a>
                </span>
              </div>
            )}
            {isAuthenticated && messages.length === 0 && (
              <div className="welcome-message">
                <span>Hello {user.username}! How can I help you?</span>
              </div>
            )}
            {isAuthenticated &&
              messages.length > 0 &&
              messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.roadmap && msg.roadmap !== roadmapTitle && (
                    <div className="message-roadmap-indicator">
                      From: {msg.roadmap}
                    </div>
                  )}
                  <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
              ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="chat-message bot typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            {usageCount >= 10 ? (
              <p className="limit-message">
                🚫 Daily limit reached. Try again tomorrow.
              </p>
            ) : (
              <>
                <input
                  type="text"
                  inputMode="text"
                  placeholder="Ask about this roadmap..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  disabled={!isAuthenticated || usageCount >= 10 || isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={!isAuthenticated || usageCount >= 10 || isTyping}
                >
                  <IoSend size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
});

export default Chatbot;
