import axios from "axios";
import { getUserInfo } from "./userAPI";

export const fetchChangePassword = async (oldPassword, newPassword, confirmPassword) => {
  try {
    // Lấy thông tin người dùng
    const user = await getUserInfo();

    // Kiểm tra sự tồn tại của api_token
    const api_token = user.api_token;

    if (!api_token) {
      throw new Error("api_token không tồn tại. Vui lòng đăng nhập.");
    }

    const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // Lấy CSRF token từ meta tag

    const response = await axios.post('https://localhost/api/v3', {
      key: api_token, // Sử dụng api_token làm key
      action: "change-password",
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    }, {
      headers: {
        'X-CSRF-TOKEN': csrf_token // Thêm CSRF token vào headers
      }
    });

    if (response.data.status === "success") {
      return response.data.message; // Trả về thông điệp thành công từ API
    } else {
      throw new Error(response.data.message || "Không thể thay đổi mật khẩu. Vui lòng kiểm tra thông tin nhập vào.");
    }
  } catch (error) {
    // Ghi lại lỗi để dễ dàng debug
    console.error("Error changing password:", error);
    throw new Error(error.response?.data?.message || "Không thể thay đổi mật khẩu. Vui lòng thử lại.");
  }
};
