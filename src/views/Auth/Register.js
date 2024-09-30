// src/views/Auth/Register.js
import React from "react";
import '../../assets/styles/styles.css'; // Đường dẫn chính xác tới tệp CSS

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Đăng Ký</h2>
        <form>
          <input type="text" placeholder="Tên Đăng Nhập" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mật Khẩu" required />
          <button type="submit">Đăng Ký</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
