import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { requestPasswordReset, clearError } from "../features/authslice";
import "../styles/Auth.css";
import Loader from "./Loader";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await dispatch(
        requestPasswordReset({ email: email.trim() })
      ).unwrap();

      if (response.success) {
        setSuccessMessage(
          "Password reset link has been sent to your email address. Please check your inbox."
        );
        setEmail("");
      }
    } catch (err) {
      console.error("Password Reset Request Error:", err);
      setErrorMessage(
        err.message || "Failed to send reset link. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Reset Password</h2>

        {isLoading ? (
          <div className="loader-wrapper">
            <Loader loading={true} />
            <p>Sending reset instructions...</p>
          </div>
        ) : (
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

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}

            <button type="submit" disabled={isLoading || !email}>
              Send Reset Link
            </button>

            <div className="auth-footer">
              <Link to="/login" className="auth-link">
                ← Back to Login
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
