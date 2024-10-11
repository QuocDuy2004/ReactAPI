import axios from 'axios';

// Function to get user information
export const getUserInfo = async () => {
  try {
    // Make the API request here if needed; for now, we'll return localStorage data
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      throw new Error("User not found in localStorage");
    }
    return user;
  } catch (error) {
    throw new Error(error.message || "Failed to fetch user information.");
  }
};
