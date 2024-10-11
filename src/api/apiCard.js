import axios from "axios";

const API_URL = "https://localhost/api/v3";

export const fetchRecharge = async () => {
  try {
    // Lấy api_token từ localStorage
    const api_token = localStorage.getItem('api_token');

    if (!api_token) {
      throw new Error("api_token không tồn tại. Vui lòng đăng nhập.");
    }

    const response = await axios.post(API_URL, {
      key: api_token, // Sử dụng api_token làm key
      action: "card",
    });

    if (response.data.status === "success") {
      return response.data.data; // Trả về dữ liệu dịch vụ trực tiếp
    } else {
      throw new Error("Không có dịch vụ để hiển thị.");
    }
  } catch (error) {
    // Ghi lại lỗi để dễ dàng debug
    console.error("Error fetching services:", error);
    throw new Error("Không thể lấy thông tin dịch vụ. Vui lòng thử lại.");
  }
};
