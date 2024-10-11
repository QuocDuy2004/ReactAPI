import axios from "axios";
import { getUserInfo } from "./userAPI"; // Import getUserInfo để lấy thông tin người dùng

const API_URL = "https://localhost/api/v2";

export const createOrder = async (orderData) => {
  try {
    // Lấy thông tin người dùng
    const user = await getUserInfo();

    // Kiểm tra sự tồn tại của api_token
    const api_token = user.api_token; // Lấy api_token từ thông tin người dùng

    if (!api_token) {
      throw new Error("api_token không tồn tại. Vui lòng đăng nhập.");
    }

    const response = await axios.post(API_URL, {
      key: api_token, // Sử dụng api_token làm key
      action: "add",
      ...orderData, // Truyền dữ liệu đặt hàng
    });

    if (response.data.status === "success") {
      return response.data.message; // Trả về thông điệp thành công
    } else {
      throw new Error("Đặt hàng không thành công. Vui lòng thử lại.");
    }
  } catch (error) {
    // Ghi lại lỗi để dễ dàng debug
    console.error("Error creating order:", error);
    throw new Error("Có lỗi xảy ra khi đặt hàng. Vui lòng thử lại sau.");
  }
};
