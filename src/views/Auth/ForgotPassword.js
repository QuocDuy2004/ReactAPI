import React, { useState, useEffect } from "react";
import '../../assets/styles/styles.css';
import axios from 'axios';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission

  useEffect(() => {
    document.title = "Khôi phục mật khẩu";
  }, []);

  // Hàm xử lý thay đổi dữ liệu input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm xử lý lỗi
  const handleErrorResponse = (error) => {
    setIsSubmitting(false); // Stop the loading state
    if (error.response?.status === 422) {
      setError(error.response.data.errors);
    } else {
      setError(error.response?.data.message || "Khôi phục thất bại. Vui lòng thử lại sau.");
    }
  };

  // Hàm xử lý submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set loading state

    try {
      const response = await axios.post('http://localhost/api/auth/forgot-password', { email: formData.email });
      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setError(null); // Clear errors if any
      } else {
        setError("Có lỗi xảy ra. Vui lòng thử lại."); // General error message
      }
    } catch (error) {
      handleErrorResponse(error); // Gọi hàm xử lý lỗi
      setSuccessMessage(null); // Reset success message if there is an error
    } finally {
      setIsSubmitting(false); // Stop loading state after API call
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card custom-card">
              <div className="card-header">
                <h4 className="card-title">Khôi phục mật khẩu</h4>
              </div>

              {/* Hiển thị lỗi nếu có */}
              {error && (
                <div className="alert alert-danger error-message mb-3">
                  {typeof error === 'string'
                    ? error
                    : Object.entries(error).map(([key, messages]) => (
                        <div key={key}>{messages.join(', ')}</div>
                      ))}
                </div>
              )}

              {/* Hiển thị thông báo thành công nếu có */}
              {successMessage && (
                <div className="alert alert-success success-message mb-3">
                  {successMessage}
                </div>
              )}

              <div className="card-body">
                <form onSubmit={handleSubmit} className="login100-form validate-form">
                <div className="row mb-3">
  <label
    htmlFor="email"
    className="col-md-4 col-form-label text-md-end"
  >
    Địa chỉ Email
  </label>
  <div className="col-md-8">
    <div className="input-group">
    <span className="input-group-text">
        <i className="fas fa-envelope" /> {/* Icon Email */}
      </span>
      <input
        type="email"
        className="form-control"
        placeholder="Email khôi phục"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        disabled={isSubmitting} // Disable input while submitting
      />
     
    </div>
  </div>
</div>


                  <div className="d-grid mb-10">
                <button type="submit" className="btn btn-primary login100-form-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu khôi phục mật khẩu'}
                </button>
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

export default ForgotPassword;
