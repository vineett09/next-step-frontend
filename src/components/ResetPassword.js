import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { resetPassword, clearError } from "../features/authslice";
import "../styles/Auth.css";
import Loader from "./Loader";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters");
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
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await dispatch(
        resetPassword({ token, password })
      ).unwrap();

      if (response.success) {
        setSuccessMessage("Password has been reset successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      console.error("Password Reset Error:", err);
      setErrorMessage(
        err.message ||
          "Failed to reset password. The link may be invalid or expired."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Set New Password</h2>

        {isLoading ? (
          <div className="loader-wrapper">
            <Loader loading={true} />
            <p>Updating your password...</p>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
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
              <label htmlFor="password">New Password</label>
            </div>

            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                placeholder=" "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
              <label htmlFor="confirmPassword">Confirm New Password</label>
            </div>

            {passwordError && (
              <div className="error-message">{passwordError}</div>
            )}
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password || !confirmPassword}
            >
              Reset Password
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

export default ResetPassword;
