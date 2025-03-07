import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/authslice";
import "../styles/roadmaps/AuthModal.css";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (passwordError || error) {
      setErrorMessage(passwordError || error);

      const timer = setTimeout(() => {
        setPasswordError("");
        setErrorMessage("");
      }, 3000); // Hide the error after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [passwordError, error]);

  // Clear errors when modal is opened or closed
  useEffect(() => {
    if (isOpen) {
      setPasswordError("");
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");

    if (isLogin) {
      dispatch(loginUser({ email, password })).then((response) => {
        if (!response.error) onClose();
      });
    } else {
      dispatch(registerUser({ username, email, password })).then((response) => {
        if (!response.error) onClose();
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => e.target.classList.contains("modal-overlay") && onClose()}
    >
      <div className="modal-content">
        <p className="title">{isLogin ? "LOGIN" : "SIGN UP"}</p>
        <form onSubmit={handleSubmit}>
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn">
            {isLogin ? "LOGIN" : "SIGN UP"}
          </button>
          <p>
            {isLogin ? "Don't have an account?" : "Have an account?"}
            <span className="link" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login"} Here!
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
