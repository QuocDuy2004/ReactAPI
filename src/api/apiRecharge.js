import axios from "axios";
import { getUserInfo } from "./userAPI"; // Giả định bạn đã có hàm này

const API_URL = "https://localhost/api/v3";

export const fetchRecharge = async () => {
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
      action: "recharge",
    });

    if (response.data.status === "success") {
      return response.data.data; // Trả về dữ liệu nạp tiền trực tiếp
    } else {
      throw new Error("Không có dữ liệu nạp tiền để hiển thị.");
    }
  } catch (error) {
    // Ghi lại lỗi để dễ dàng debug
    console.error("Error fetching recharge data:", error);
    throw new Error("Không thể lấy thông tin nạp tiền. Vui lòng thử lại.");
  }
};
