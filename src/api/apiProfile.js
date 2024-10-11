import axios from "axios";
import { getUserInfo } from "./userAPI";

export const fetchProfile = async () => {
  try {
    // Retrieve user info
    const user = await getUserInfo();
    const api_token = user.api_token;

    if (!api_token) {
      throw new Error("api_token không tồn tại. Vui lòng đăng nhập.");
    }

    const response = await axios.post('https://localhost/api/v3', {
      key: api_token, // Use api_token as the key
      action: "profile",
    });

    // Check response status and data structure
    if (response.data && response.data.status === "success") {
      return response.data.data; // Return profile data
    } else {
      throw new Error("Không thể lấy thông tin hồ sơ. Vui lòng thử lại sau.");
    }
  } catch (error) {
    // Log error for easier debugging
    console.error("Error fetching profile:", error);
    throw new Error("Không thể lấy thông tin hồ sơ. Vui lòng thử lại."); // Improved error message
  }
};
