import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      // Determine endpoint based on login method
      const endpoint = userData.googleId
        ? "/api/auth/google-login"
        : "/api/auth/login";

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
      const response = await axios.post("/api/auth/register", userData);
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

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
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
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    clearError: (state) => {
      state.error = null;
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
        state.user = action.payload.user;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Login failed",
          code: action.payload?.code,
          details: action.payload?.details,
          suggestedUsername: action.payload?.suggestedUsername,
        };
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.payload?.message || "Registration failed",
          code: action.payload?.code,
          details: action.payload?.details,
          suggestedUsername: action.payload?.suggestedUsername,
        };
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
