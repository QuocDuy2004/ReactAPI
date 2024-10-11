import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate to handle redirection
import '../../assets/styles/styles.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Đặt trạng thái submitting thành true
  
    const _formData = {
      username: formData.username,
      password: formData.password,
    };
  
    try {
      const response = await axios.post('http://localhost/api/auth/login', _formData);
      if (response.data.success) {
        // Lưu tất cả thông tin người dùng vào localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Lưu thông tin người dùng
        localStorage.setItem("api_token", response.data.token); // Lưu token
        localStorage.setItem("username", response.data.user.username); // Lưu username
  
        // Nếu API trả về thêm dữ liệu, bạn có thể lưu nó ở đây
        // Ví dụ:
        // localStorage.setItem("userRole", response.data.user.role);
        // localStorage.setItem("userEmail", response.data.user.email);
  
        setSuccessMessage(response.data.message);
        setError(null); // Xóa lỗi nếu có
        navigate('/home'); // Chuyển hướng đến trang Home
      }
    } catch (error) {
      if (error.response?.status === 422) {
        setError(error.response.data.errors);
      } else {
        setError(error.response?.data.message || "Đăng nhập thất bại. Vui lòng thử lại sau.");
      }
      setSuccessMessage(null); 
    } finally {
      setIsSubmitting(false); // Đặt lại trạng thái sau khi hoàn thành
    }
  };
  

  return (
    <div className="page">
      <div className="container-login100">
        <div className="card wrap-login100 p-0">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="login100-form validate-form">
              <span className="login100-form-title">Đăng Nhập</span>

              {error && (
                <div className="alert alert-danger error-message mb-3">
                  {typeof error === 'string'
                    ? error
                    : Object.entries(error).map(([key, messages]) => (
                        <div key={key}>{messages.join(', ')}</div>
                      ))}
                </div>
              )}

              {successMessage && (
                <div className="alert alert-success success-message mb-3">
                  {successMessage}
                </div>
              )}

              <div className="wrap-input100 validate-input">
                <span className="symbol-input100">
                  <i className="fas fa-user" />
                </span>
                <input
                  type="text"
                  className="form-control input100"
                  placeholder="Tên tài khoản"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
                <span className="focus-input100" />
              </div>

              <div className="wrap-input100 validate-input">
                <span className="symbol-input100">
                  <i className="fas fa-lock" />
                </span>
                <input
                  type="password"
                  className="form-control input100"
                  placeholder="Mật khẩu truy cập"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <span className="focus-input100" />
              </div>

              <div className="text-end pt-1">
                <p className="mb-0"><a href="/auth/forgot-password" className="text-primary ms-1">Quên mật khẩu?</a></p>
              </div>

              <div className="d-grid mb-10">
                <button type="submit" className="btn btn-primary login100-form-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Đang thực hiện đăng nhập...' : 'Đăng nhập'}
                </button>
              </div>

              <div className="text-center pt-3">
                <p className="text-dark mb-0">Chưa có tài khoản? <a href="/auth/register" className="text-primary ms-1">Đăng ký ngay</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
