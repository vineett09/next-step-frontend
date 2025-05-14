// Create a new file: src/services/authService.js

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "../features/authslice";

// Custom hook for token management
export const useTokenRefresh = () => {
  const dispatch = useDispatch();
  const {
    token,
    tokenExpiryTime,
    refreshToken: refToken,
  } = useSelector((state) => state.auth);

  useEffect(() => {
    // Skip if no token or refresh token
    if (!token || !refToken) return;

    // Function to check and refresh token
    const checkTokenExpiry = () => {
      const currentTime = Date.now();
      const tokenExpiry = parseInt(tokenExpiryTime, 10);

      // If token expires in less than 5 minutes, refresh it
      if (tokenExpiry && currentTime > tokenExpiry - 5 * 60 * 1000) {
        dispatch(refreshToken());
      }
    };

    // Check immediately
    checkTokenExpiry();

    // Set interval to check every 5 minutes
    const interval = setInterval(checkTokenExpiry, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [token, tokenExpiryTime, refToken, dispatch]);
};

// Setup axios interceptor for automatic token handling
export const setupAxiosInterceptors = (axiosInstance, store) => {
  // Request interceptor to add token
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor to handle token expiration
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // If error is 401 (Unauthorized) and not already retrying
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // Attempt to refresh the token
          await store.dispatch(refreshToken()).unwrap();

          // If successful, update the request with new token and retry
          const newToken = store.getState().auth.token;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          // If refresh fails, proceed with rejection
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};
