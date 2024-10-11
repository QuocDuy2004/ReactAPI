import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { token } = useParams(); // Get the token from the URL
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await axios.post(`http://127.0.0.1/api/auth/reset-password/${token}`, formData);
      setSuccessMessage(response.data.message);
    } catch (error) {
      console.error('Error response:', error.response);
      if (error.response && error.response.data) {
        setError(error.response.data.errors || error.response.data.message);
      } else {
        setError('Có lỗi xảy ra, vui lòng thử lại sau.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <div className="container-login100">
        <div className="card wrap-login100 p-0">
          <div className="card-body">
            <form onSubmit={handleResetPassword} className="login100-form validate-form">
              <span className="login100-form-title">Đặt lại mật khẩu</span>

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
                  <i className="fas fa-lock" />
                </span>
                <input
                  className="form-control input100"
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu mới"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span className="focus-input100" />
              </div>

              <div className="wrap-input100 validate-input">
                <span className="symbol-input100">
                  <i className="fas fa-lock" />
                </span>
                <input
                  className="form-control input100"
                  type="password"
                  name="password_confirmation"
                  placeholder="Xác nhận mật khẩu"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                />
                <span className="focus-input100" />
              </div>

              <div className="d-grid mb-10">
                <button type="submit" className="btn btn-primary login100-form-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Đang thực hiện đặt mật khẩu...' : 'Đặt lại mật khẩu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
