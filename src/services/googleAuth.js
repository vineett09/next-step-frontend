import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseconfig";

export const signInWithGoogle = async () => {
  try {
    // Trigger Google Sign-In popup
    const result = await signInWithPopup(auth, googleProvider);

    // Get user credentials
    const user = result.user;

    // Get the full ID token with extensive logging
    const googleId = await user.getIdToken(true);

    // Return all necessary data
    return {
      uid: user.uid,
      email: user.email,
      googleId: googleId,
      displayName: user.displayName,
    };
  } catch (error) {
    console.error("Comprehensive Google Sign-In Error:", {
      name: error.name,
      code: error.code,
      message: error.message,
      fullError: error,
    });
    throw error;
  }
};
