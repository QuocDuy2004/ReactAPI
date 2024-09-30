// src/views/Auth/Login.js
import React from "react";


const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Đăng Nhập</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mật Khẩu" required />
          <button type="submit">Đăng Nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
