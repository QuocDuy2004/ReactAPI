import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const API_URL = "https://localhost/api/v3";

const InfoCard = ({ title, value, bgClass, iconClass }) => (
  <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
    <div className={`card ${bgClass} img-card box-primary-shadow`}>
      <div className="card-body">
        <div className="d-flex">
          <div className="text-white">
            <h2 className="mb-0 number-font text-fixed-white">{value}</h2>
            <p className="text-white mb-0 text-fixed-white">{title}</p>
          </div>
          <div className="ms-auto">
            <i className={`${iconClass} text-fixed-white fs-30 me-2 mt-2`} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Profile = () => {
  const [profileData, setProfileData] = useState({
    balance: 0,
    total_recharge: 0,
    total_deduct: 0,
    username: '',
    name: '',
    email: '',
    level: 0,
    lang: '',
    created_at: '',
    updated_at: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const tokenRef = useRef(null);
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const api_token = localStorage.getItem("api_token");
        if (!api_token) throw new Error("api_token không tồn tại. Vui lòng đăng nhập.");

        const response = await axios.post(API_URL, {
          key: api_token,
          action: "profile",
        });

        if (response.data.status === "success") {
          setProfileData({
            ...response.data.data,
            api_token,
          });
        } else {
          throw new Error("Không có dịch vụ để hiển thị.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const copyToken = () => {
    navigator.clipboard.writeText(profileData.api_token)
      .then(() => toastr.success('Token đã được sao chép thành công!'))
      .catch(() => toastr.error('Có lỗi xảy ra khi sao chép token.'));
  };

  const fetchChangePassword = async (oldPassword, newPassword, confirmPassword) => {
    try {
      const api_token = localStorage.getItem('api_token');
      const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

      if (!api_token) {
        throw new Error("api_token không tồn tại. Vui lòng đăng nhập.");
      }

      const response = await axios.post(API_URL, {
        key: api_token,
        action: "change-password",
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      }, {
        headers: {
          'X-CSRF-TOKEN': csrf_token
        }
      });

      if (response.data.status === "success") {
        return response.data.data;
      } else {
        throw new Error("Không có dịch vụ để hiển thị.");
      }
    } catch (error) {
      console.error("Error fetching services:", error);
      throw new Error("Không thể lấy thông tin dịch vụ. Vui lòng thử lại.");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Validate new password and confirm password
    if (newPassword !== confirmPassword) {
      toastr.error('Mật khẩu mới và xác nhận mật khẩu không khớp.');
      return;
    }

    try {
      await fetchChangePassword(currentPassword, newPassword, confirmPassword);
      toastr.success('Thay đổi mật khẩu thành công!');
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toastr.error(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container-fluid">
      <div className="row">
        <InfoCard
          title="Cấp bậc hiện tại"
          value={profileData.level === "1" ? "Thành viên" : profileData.level === "2" ? "Cộng tác viên" : profileData.level === "3" ? "Đại lý" : profileData.level === "4" ? "Nhà phân phối" : "Khác"}
          bgClass="bg-primary"
          iconClass="fas fa-ranking-star"
        />
        <InfoCard title="Số dư hiện tại" value={`${profileData.balance} ${profileData.type_balance}`} bgClass="bg-success" iconClass="fas fa-wallet" />
        <InfoCard title="Số tiền đã nạp" value={`${profileData.total_recharge} ${profileData.type_balance}`} bgClass="bg-info" iconClass="fas fa-dollar-sign" />
        <InfoCard title="Tổng tiền đã tiêu" value={`${profileData.total_deduct} ${profileData.type_balance}`} bgClass="bg-secondary" iconClass="fas fa-database" />
      </div>
      <section className="space-y-6">
        <div className="row">
          <div className="col-md-6">
            <div className="card custom-card" id="myTabContent">
              <div className="card-header">
                <h3 className="card-title">Thông tin tài khoản</h3>
              </div>
              <div className="card-body">
                <form id="updateProfileForm" className="space-y-3">
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Họ và tên</label>
                      <input id="name" name="name" type="text" className="form-control" defaultValue={profileData.name} disabled />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="username" className="form-label">Tên Đăng Nhập</label>
                      <input id="username" name="username" type="text" className="form-control" defaultValue={profileData.username} disabled />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Địa chỉ e-mail</label>
                      <input id="email" name="email" type="text" className="form-control" defaultValue={profileData.email} disabled />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lang" className="form-label">Ngôn ngữ</label>
                      <input id="lang" name="lang" type="text" className="form-control" defaultValue={profileData.lang} disabled />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="created_at" className="form-label">Ngày tạo</label>
                      <input id="created_at" name="created_at" type="text" className="form-control" defaultValue={new Date(profileData.created_at).toLocaleString()} disabled />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="updated_at" className="form-label">Ngày cập nhập</label>
                      <input id="updated_at" name="updated_at" type="text" className="form-control" defaultValue={new Date(profileData.updated_at).toLocaleString()} disabled />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="api_token" className="form-label">API Token</label>
                    <div className="input-group">
                      <input
                        ref={tokenRef}
                        id="api_token"
                        type="text"
                        className="form-control"
                        value={profileData.api_token}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={copyToken}
                      >
                        Sao chép
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card custom-card">
              <div className="card-header">
                <h3 className="card-title">Đổi mật khẩu</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleChangePassword} className="space-y-3">
                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">Mật khẩu hiện tại</label>
                    <input
                      type="password"
                      className="form-control"
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">Mật khẩu mới</label>
                    <input
                      type="password"
                      className="form-control"
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu mới</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
