import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/authslice";
import { signInWithGoogle } from "../services/googleAuth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";
import Loader from "./Loader";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePasswords()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await dispatch(
        registerUser({ username, email, password })
      );

      if (!response.error) {
        navigate("/login");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const googleUserData = await signInWithGoogle();

      const response = await dispatch(
        registerUser({
          email: googleUserData.email,
          username:
            googleUserData.username || googleUserData.email.split("@")[0],
          googleId: googleUserData.googleId, // Important: Include googleId
        })
      );

      if (!response.error) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || "Google Sign-Up failed");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Create Account</h2>

        {isLoading ? (
          <div className="loader-wrapper">
            <Loader loading={true} />
            <p>Creating your account...</p>
          </div>
        ) : (
          <>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  placeholder=" "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>

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
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder=" "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>

              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}

              <button type="submit" disabled={isLoading}>
                Sign Up
              </button>
            </form>

            <div className="auth-divider">
              <span>or</span>
            </div>

            {/* Google Sign-Up Button */}
            <div className="google-signin-container">
              <button
                className="google-signin-button"
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
                Sign up with Google
              </button>
            </div>

            <div className="auth-link">
              Already have an account? <Link to="/login">Sign in</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;
