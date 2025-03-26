// src/services/googleAuth.js
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseconfig";
import axios from "axios";

export const signInWithGoogle = async () => {
  try {
    // Trigger Google Sign-In popup
    const result = await signInWithPopup(auth, googleProvider);

    // Get user credentials
    const user = result.user;

    // Get ID token
    const googleId = await user.getIdToken();

    // Prepare user data for backend
    const googleUser = {
      username: user.displayName || user.email.split("@")[0],
      email: user.email,
      googleId: googleId,
    };

    return googleUser;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};
