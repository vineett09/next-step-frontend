import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { refreshToken } = getState().auth;

      if (!refreshToken) {
        return rejectWithValue({
          message: "No refresh token available",
          code: "NO_REFRESH_TOKEN",
        });
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/auth/refresh-token`,
        { refreshToken }
      );

      return response.data;
    } catch (error) {
      const errorData = error.response?.data || {};
      return rejectWithValue({
        message: errorData.msg || "Failed to refresh token",
        code: errorData.code || "REFRESH_FAILED",
        details: errorData.details,
      });
    }
  }
);

// Add this new thunk for logout
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { getState, dispatch }) => {
    try {
      const { token } = getState().auth;

      // Send logout request to server if token exists
      if (token) {
        await axios.post(
          `${BACKEND_URL}/api/auth/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }

      // Clear local state regardless of server response
      dispatch(logout());

      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      // Still logout locally even if server request fails
      dispatch(logout());
      return { success: true };
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      // Determine endpoint based on login method
      const endpoint = userData.googleId
        ? `${BACKEND_URL}/api/auth/google-login`
        : `${BACKEND_URL}/api/auth/login`;

      const response = await axios.post(endpoint, userData);
      return response.data;
    } catch (error) {
      // Enhanced error handling
      const errorData = error.response?.data || {};
      console.error("Login Error:", errorData);

      return rejectWithValue({
        message: errorData.msg || "Login failed",
        code: errorData.code || "UNKNOWN_ERROR",
        details: errorData.details,
        suggestedUsername: errorData.suggestedUsername,
      });
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/auth/register`,
        userData
      );
      return response.data;
    } catch (error) {
      const errorData = error.response?.data || {};
      return rejectWithValue({
        message: errorData.msg || "Registration failed",
        code: errorData.code || "UNKNOWN_ERROR",
        details: errorData.details,
        suggestedUsername: errorData.suggestedUsername,
      });
    }
  }
);
export const requestPasswordReset = createAsyncThunk(
  "auth/requestPasswordReset",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/auth/forgot-password`,
        userData
      );
      return response.data;
    } catch (error) {
      const errorData = error.response?.data || {};
      return rejectWithValue({
        message: errorData.msg || "Failed to send reset link",
        code: errorData.code || "RESET_REQUEST_FAILED",
        details: errorData.details,
      });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/auth/reset-password/${token}`,
        {
          password,
        }
      );
      return response.data;
    } catch (error) {
      const errorData = error.response?.data || {};
      return rejectWithValue({
        message: errorData.msg || "Password reset failed",
        code: errorData.code || "RESET_PASSWORD_FAILED",
        details: errorData.details,
      });
    }
  }
);
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  loading: false,
  error: null,
  tokenExpiryTime: localStorage.getItem("tokenExpiryTime") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      if (state.user && state.user.id) {
        localStorage.removeItem(`chat_messages_${state.user.id}`);
      }

      state.user = null;
      state.token = null;
      state.refreshToken = null;
      state.tokenExpiryTime = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("tokenExpiryTime");
    },
    clearError: (state) => {
      state.error = null;
    },
    // Add this action to set the token expiry time
    setTokenExpiryTime: (state, action) => {
      state.tokenExpiryTime = action.payload;
      localStorage.setItem("tokenExpiryTime", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.error = null;

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("refreshToken", action.payload.refreshToken);

        // Set token expiry time - 55 minutes from now (slightly less than the 1h token lifetime)
        const expiryTime = Date.now() + 55 * 60 * 1000;
        state.tokenExpiryTime = expiryTime;
        localStorage.setItem("tokenExpiryTime", expiryTime.toString());
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // Store error as a string to avoid type issues in components
        state.error = action.payload?.message || "Login failed";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.error = null;

        // Store in localStorage
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("refreshToken", action.payload.refreshToken);

        // Set token expiry time - 55 minutes from now
        const expiryTime = Date.now() + 55 * 60 * 1000;
        state.tokenExpiryTime = expiryTime;
        localStorage.setItem("tokenExpiryTime", expiryTime.toString());
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        // Store error as a string to avoid type issues in components
        state.error = action.payload?.message || "Registration failed";
      })
      .addCase(requestPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestPasswordReset.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Failed to send reset link",
          code: action.payload?.code,
          details: action.payload?.details,
        };
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Password reset failed",
          code: action.payload?.code,
          details: action.payload?.details,
        };
      })
      .addCase(refreshToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.error = null;

        // Update token in localStorage
        localStorage.setItem("token", action.payload.token);

        // Update token expiry time - 55 minutes from now
        const expiryTime = Date.now() + 55 * 60 * 1000;
        state.tokenExpiryTime = expiryTime;
        localStorage.setItem("tokenExpiryTime", expiryTime.toString());
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;

        // Only set error if it's not a "NO_REFRESH_TOKEN" error
        if (action.payload?.code !== "NO_REFRESH_TOKEN") {
          state.error = action.payload?.message || "Failed to refresh token";
        }

        // If refresh failed due to invalid token, logout
        if (action.payload?.code === "INVALID_REFRESH_TOKEN") {
          state.user = null;
          state.token = null;
          state.refreshToken = null;
          state.tokenExpiryTime = null;
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("tokenExpiryTime");
        }
      });
  },
});

export const { logout, clearError, setTokenExpiryTime } = authSlice.actions;
export default authSlice.reducer;
