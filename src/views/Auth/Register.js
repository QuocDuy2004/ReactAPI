import React, { useState } from "react";
import '../../assets/styles/styles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    toc: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State để theo dõi quá trình gửi form
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra xác nhận mật khẩu
    if (formData.password !== formData.password_confirmation) {
      toastr.error("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    const _formData = {
      name: formData.name,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    };

    setIsSubmitting(true); // Bắt đầu gửi form

    try {
      // Gọi API đăng ký
      const response = await axios.post('http://localhost/api/auth/register', _formData);
      toastr.success(response.data.message || "Bạn đã đăng ký thành công!");
      setTimeout(() => {
        navigate('/auth/login');
      }, 1500);
    } catch (error) {
      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        // Hiển thị tất cả lỗi bằng toastr
        Object.entries(errors).forEach(([key, messages]) => {
          toastr.error(messages.join(', '));
        });
      } else {
        toastr.error("Đăng ký thất bại.");
      }
    } finally {
      setIsSubmitting(false); // Kết thúc quá trình gửi form
    }
  };

  return (
    <div className="page">
      <div className="page login-page">
        <div>
          <div className="container-login100">
            <div className="card wrap-login100 p-0">
              <div className="card-body">
                <form onSubmit={handleSubmit} className="login100-form validate-form form-register">
                  <span className="login100-form-title">Đăng ký</span>

                  <div className="wrap-input100 validate-input">
                    <span className="symbol-input100">
                      <i className="fas fa-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control input100"
                      placeholder="Nhập họ và tên..."
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="focus-input100" />
                  </div>

                  <div className="wrap-input100 validate-input">
                    <span className="symbol-input100">
                      <i className="fas fa-envelope" />
                    </span>
                    <input
                      type="email"
                      className="form-control input100"
                      placeholder="Địa chỉ Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="focus-input100" />
                  </div>

                  <div className="wrap-input100 validate-input">
                    <span className="symbol-input100">
                      <i className="fas fa-user-circle" />
                    </span>
                    <input
                      type="text"
                      className="form-control input100"
                      placeholder="Tài khoản đăng nhập"
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
                      placeholder="Mật khẩu đăng nhập"
                      name="password"
                      value={formData.password}
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
                      placeholder="Xác nhận mật khẩu"
                      name="password_confirmation"
                      value={formData.password_confirmation}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="focus-input100" />
                  </div>

                  <div className="fv-row mb-8">
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="toc"
                        checked={formData.toc}
                        onChange={handleInputChange}
                        required
                      />
                      <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">
                        Tôi đồng ý với <a href="#" className="ms-1 link-primary">điều khoản</a>
                      </span>
                    </label>
                  </div>

                  <div className="d-grid mb-10">
                    <button type="submit" className="btn btn-primary login100-form-btn" disabled={isSubmitting}>
                      <span className="indicator-label">{isSubmitting ? 'Đang thực hiện đăng ký...' : 'Đăng ký Ngay'}</span>
                    </button>
                  </div>

                  <div className="text-center pt-3">
                    <p className="text-dark mb-0">Đã có tài khoản? <a href="/auth/login" className="text-primary ms-1">Đăng nhập ngay</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
