import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../features/authslice";
import { signInWithGoogle } from "../services/googleAuth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";
import Loader from "./Loader";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [googleUserData, setGoogleUserData] = useState(null);
  const [suggestedUsername, setSuggestedUsername] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  // In your Login.js, update the useEffect for error handling
  useEffect(() => {
    if (error) {
      const errorText = typeof error === "string" ? error : error.message;
      setErrorMessage(errorText);
      const timer = setTimeout(() => {
        setErrorMessage("");
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);
  useEffect(() => {
    if (error) {
      // Handle both string errors and error objects
      const errorText = typeof error === "string" ? error : error.message;
      setErrorMessage(errorText);
      const timer = setTimeout(() => setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Clear error when user starts typing new username
  useEffect(() => {
    if (errorMessage && errorMessage.includes("username")) {
      setErrorMessage("");
    }
  }, [username, errorMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      let response;
      if (isGoogleLogin && googleUserData) {
        // For Google login
        response = await dispatch(
          loginUser({
            email: googleUserData.email,
            googleId: googleUserData.googleId,
            username: username.trim(),
            uid: googleUserData.uid,
          })
        ).unwrap();

        if (response.user) {
          navigate("/");
        }
      } else {
        // Regular email/password login
        response = await dispatch(
          loginUser({ email: email.trim(), password })
        ).unwrap();

        if (response.user) {
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Login Error:", err);

      // Handle specific error cases
      if (err.code === "USERNAME_TAKEN") {
        setErrorMessage("Username is taken. Try: " + err.suggestedUsername);
        setSuggestedUsername(err.suggestedUsername);
      } else if (err.code === "ACCOUNT_CONFLICT") {
        setErrorMessage("Account already exists with different login method");
      } else {
        setErrorMessage(err.message || "Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const googleUserData = await signInWithGoogle();

      // First check if user exists
      const checkUserResponse = await axios.post(
        `${BACKEND_URL}/api/auth/check-user`,
        {
          email: googleUserData.email,
        }
      );

      if (checkUserResponse.data.exists) {
        // Existing user - login directly
        const response = await dispatch(
          loginUser({
            email: googleUserData.email,
            googleId: googleUserData.googleId,
            uid: googleUserData.uid,
          })
        ).unwrap();

        if (response.user) {
          navigate("/");
        }
      } else {
        // New user - show username form
        setGoogleUserData(googleUserData);
        setEmail(googleUserData.email);
        setUsername(
          googleUserData.displayName?.replace(/\s+/g, "").toLowerCase() || ""
        );
        setIsGoogleLogin(true);
      }
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      setErrorMessage(
        error.response?.data?.msg || error.message || "Google Sign-In failed"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const useSuggestedUsername = () => {
    setUsername(suggestedUsername);
    setSuggestedUsername("");
  };

  const renderForm = () => {
    if (isGoogleLogin) {
      return (
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              placeholder=" "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength={3}
              maxLength={20}
            />
            <label htmlFor="username">Choose a Username</label>
            {suggestedUsername && (
              <div className="suggestion-text">
                Try:{" "}
                <span onClick={useSuggestedUsername}>{suggestedUsername}</span>
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder=" "
              value={email}
              disabled
            />
            <label htmlFor="email">Your Google Email</label>
          </div>
          {errorMessage && (
            <div
              className={`error-message ${
                suggestedUsername ? "with-suggestion" : ""
              }`}
            >
              {/* Display just the message, not the entire error object */}
              {typeof errorMessage === "string"
                ? errorMessage
                : errorMessage.message}
              {suggestedUsername && (
                <span>
                  {" "}
                  Try:{" "}
                  <span onClick={useSuggestedUsername}>
                    {suggestedUsername}
                  </span>
                </span>
              )}
            </div>
          )}
          <button type="submit" disabled={isLoading || username.length < 3}>
            {isLoading ? "Completing..." : "Complete Registration"}
          </button>
          <div
            className="auth-link back-link"
            onClick={() => {
              setIsGoogleLogin(false);
              setUsername("");
              setErrorMessage("");
            }}
          >
            ← Back to login options
          </div>
        </form>
      );
    }

    // Regular login form
    return (
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <label htmlFor="password">Password</label>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="auth-actions">
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
        </div>
      </form>
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">
          {isGoogleLogin ? "Complete Registration" : "Welcome Back"}
        </h2>

        {isLoading ? (
          <div className="loader-wrapper">
            <Loader loading={true} />
            <p>
              {isGoogleLogin
                ? "Setting up your account..."
                : "Signing you in..."}
            </p>
          </div>
        ) : (
          <>
            {renderForm()}

            {!isGoogleLogin && (
              <>
                <div className="auth-divider">
                  <span>or</span>
                </div>

                <div className="social-logins">
                  <button
                    className="google-signin-button"
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
                      />
                      <path
                        fill="#34A853"
                        d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.455 21.14 7.555 24 12.255 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98A11.86 11.86 0 0 0 .255 12c0 1.92.46 3.74 1.28 5.38l3.99-3.09z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0 7.555 0 3.455 2.86 1.275 7.04l3.99 3.09c.95-2.85 3.6-4.96 6.99-4.96z"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </div>

                <div className="auth-footer">
                  Don't have an account?{" "}
                  <Link to="/register" className="auth-link">
                    Sign up
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
