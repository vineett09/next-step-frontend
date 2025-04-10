import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/authslice";
import { signInWithGoogle } from "../services/googleAuth";
import "../styles/roadmaps/AuthModal.css";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [googleUserData, setGoogleUserData] = useState(null);
  const [suggestedUsername, setSuggestedUsername] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (passwordError || error) {
      setErrorMessage(passwordError || error);

      const timer = setTimeout(() => {
        setPasswordError("");
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [passwordError, error]);

  useEffect(() => {
    if (isOpen) {
      setPasswordError("");
      setErrorMessage("");
      setIsGoogleLogin(false);
      setGoogleUserData(null);
      setSuggestedUsername("");
    }
  }, [isOpen]);

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
      if (isGoogleLogin && googleUserData) {
        // For Google login
        const response = await dispatch(
          loginUser({
            email: googleUserData.email,
            googleId: googleUserData.googleId,
            username: username.trim(),
            uid: googleUserData.uid,
          })
        ).unwrap();

        if (response.user) {
          onClose();
        }
      } else if (!isLogin && password !== confirmPassword) {
        setPasswordError("Passwords do not match");
        return;
      } else if (isLogin) {
        // Regular email/password login
        const response = await dispatch(
          loginUser({ email: email.trim(), password })
        ).unwrap();

        if (response.user) {
          onClose();
        }
      } else {
        // Registration
        const response = await dispatch(
          registerUser({ username, email, password })
        ).unwrap();

        if (response.user) {
          onClose();
        }
      }
    } catch (err) {
      console.error("Auth Error:", err);

      if (err.code === "USERNAME_TAKEN") {
        setErrorMessage("Username is taken. Try: " + err.suggestedUsername);
        setSuggestedUsername(err.suggestedUsername);
      } else if (err.code === "ACCOUNT_CONFLICT") {
        setErrorMessage("Account already exists with different login method");
      } else {
        setErrorMessage(
          err.message || "Authentication failed. Please try again."
        );
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

      const checkUserResponse = await axios.post(
        `${BACKEND_URL}/api/auth/check-user`,
        {
          email: googleUserData.email,
        }
      );

      if (checkUserResponse.data.exists) {
        const response = await dispatch(
          loginUser({
            email: googleUserData.email,
            googleId: googleUserData.googleId,
            uid: googleUserData.uid,
          })
        ).unwrap();

        if (response.user) {
          onClose();
        }
      } else {
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

  const renderGoogleLoginForm = () => {
    return (
      <div className="form_group">
        <div className="form_group">
          <label className="sub_title">Choose a Username</label>
          <input
            type="text"
            placeholder="Enter username"
            className="form_style"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={3}
            maxLength={20}
          />
          {suggestedUsername && (
            <div className="suggestion-text">
              Try:{" "}
              <span onClick={useSuggestedUsername}>{suggestedUsername}</span>
            </div>
          )}
        </div>
        <div className="form_group">
          <label className="sub_title">Email</label>
          <input
            type="email"
            placeholder="Your Google Email"
            className="form_style"
            value={email}
            disabled
          />
        </div>
      </div>
    );
  };

  const renderRegularForm = () => {
    return (
      <>
        {!isLogin && (
          <div className="form_group">
            <label className="sub_title">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form_style"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form_group">
          <label className="sub_title">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form_style"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form_group">
          <label className="sub_title">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form_style"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div className="form_group">
            <label className="sub_title">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="form_style"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
      </>
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target.classList.contains("modal-overlay") && onClose()}
    >
      <div className="modal-content">
        <p className="title">
          {isGoogleLogin
            ? "Complete Registration"
            : isLogin
            ? "LOGIN"
            : "SIGN UP"}
        </p>
        <form onSubmit={handleSubmit}>
          {isGoogleLogin ? renderGoogleLoginForm() : renderRegularForm()}

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button
            type="submit"
            className="btn"
            disabled={isLoading || (isGoogleLogin && username.length < 3)}
          >
            {isLoading
              ? isGoogleLogin
                ? "Completing..."
                : "Processing..."
              : isGoogleLogin
              ? "Complete Registration"
              : isLogin
              ? "LOGIN"
              : "SIGN UP"}
          </button>

          {!isGoogleLogin && (
            <>
              <div className="google-signin-divider">
                <span>or</span>
              </div>
              <button
                type="button"
                className="google-signin-btn"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
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
            </>
          )}

          {!isGoogleLogin && (
            <p>
              {isLogin ? "Don't have an account?" : "Have an account?"}
              <span className="link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign Up" : "Login"} Here!
              </span>
            </p>
          )}

          {isGoogleLogin && (
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
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
