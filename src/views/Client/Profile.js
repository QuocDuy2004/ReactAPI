import React from "react";

const Profile = () => {
  return (
    
  <div className="container-fluid">
    {/* Page Header */}
    <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div className="ms-auto pageheader-btn">
        <button type="button" className="btn btn-primary btn-wave waves-effect waves-light me-2">
          <i className="fe fe-plus mx-1 align-middle" />Số dư: <span className="user-balance">998 ₫</span>
        </button>
      </div>
    </div>
    {/* Page Header Close */}
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-primary img-card box-primary-shadow">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <h2 className="mb-0 number-font text-fixed-white">Thành viên
                </h2>
                <p className="text-white mb-0 text-fixed-white">Cấp bậc hiện tại</p>
              </div>
              <div className="ms-auto"> <i className="fas fa-ranking-star text-fixed-white fs-30 me-2 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>{/* COL END */}
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-success img-card box-success-shadow">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <h2 className="mb-0 number-font text-fixed-white">998
                  ₫</h2>
                <p className="text-white mb-0 text-fixed-white">Số dư hiện tại</p>
              </div>
              <div className="ms-auto"> <i className="fas fa-wallet text-fixed-white fs-30 me-2 mt-2" /> </div>
            </div>
          </div>
        </div>
      </div>{/* COL END */}
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-info img-card box-info-shadow">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <h2 className="mb-0 number-font text-fixed-white">
                  0 ₫</h2>
                <p className="text-white mb-0 text-fixed-white">Số tiền đã nạp</p>
              </div>
              <div className="ms-auto"> <i className="fas fa-dollar-sign text-fixed-white fs-30 me-2 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>{/* COL END */}
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div className="card bg-secondary img-card box-secondary-shadow">
          <div className="card-body">
            <div className="d-flex">
              <div className="text-white">
                <h2 className="mb-0 number-font text-fixed-white">
                  2 ₫</h2>
                <p className="text-white mb-0 text-fixed-white">Tổng tiền đã tiêu</p>
              </div>
              <div className="ms-auto"> <i className="fas fa-database text-fixed-white fs-30 me-2 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>{/* COL END */}
    </div>
    <section className="space-y-6">
      <div className="row">
        <div className="col-md-6">
          <div className="card custom-card" id="myTabContent">
            <div className="card-header">
              <h3 className="card-title">Thông tin tài khoản</h3>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#link_telegramModal">
                Cấu hình telegram
              </button>
            </div>
            <div className="card-body">
              <form id="updateProfileForm" className="space-y-3">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="username" className="form-label">Họ và tên</label>
                    <input id="username" name="username" type="text" className="form-control" defaultValue="PHAM QUOC DUY" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="username" className="form-label">Tên Đăng Nhập</label>
                    <input id="username" name="username" type="text" className="form-control" defaultValue="duybuntv" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Địa chỉ e-mail</label>
                    <input id="email" name="email" type="text" className="form-control" defaultValue="duybuntv@gmail.com" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lang" className="form-label">Ngôn ngữ</label>
                    <select name="lang" id="lang" className="form-select">
                      <option value="vi">vi</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="created_at" className="form-label">Ngày Đăng Ký</label>
                    <input id="created_at" name="created_at" type="text" className="form-control" defaultValue="2024-09-17 14:29:52" disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="updated_at" className="form-label">Ngày Cập Nhật</label>
                    <input id="updated_at" name="updated_at" type="text" className="form-control" defaultValue="2024-09-29 13:29:53" disabled />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-2">
                    <div className="alert alert-danger">
                      Access Token *: <span id="access_token">JnopOJdzWn2NPGApx1rGc7l90tsOtRx2tsIh3NIBXDEiqnPxXnV0YFYDj1TxYGNwQ49NnTd5auwkAsoi</span>
                      <span className="copy text-dark" data-clipboard-target="#access_token">
                        <i className="fas fa-copy" />
                      </span>
                      |
                      <a className="text-success" id="btnReload"><i className="fas fa-refresh" /> Đổi
                        token</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card custom-card">
            <div className="card-header">
              <h3 className="card-title">Thay đổi mật khẩu</h3>
            </div>
            <div className="card-body">
              <form action="https://localhost/update-profile/change-password" method="POST" request="duymedia">
                <div className="mb-3">
                  <label htmlFor="old_password" className="form-label">Mật Khẩu Cũ</label>
                  <input type="password" className="form-control  py-2" id="old_password" name="old_password" placeholder="Nhập mật khẩu cũ" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="new_password" className="form-label">Mật Khẩu Mới</label>
                  <input type="password" className="form-control  py-2" id="new_password" name="new_password" placeholder="Nhập mật khẩu mới" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirm_password" className="form-label">Xác Nhận Mật Khẩu</label>
                  <input type="password" className="form-control  py-2" id="confirm_password" name="confirm_password" placeholder="Nhập lại mật khẩu mới" required />
                </div>
                <div className="mb-3 text-end">
                  <button type="submit" className="btn btn-sm btn-primary w-full">Đổi Mật Khẩu</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Modal */}
        <div className="modal fade" id="link_telegramModal" tabIndex={-1} aria-labelledby="telegramModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="telegramModalLabel">Cấu hình Telegram</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                {/* Form đầu tiên */}
                <form action="https://localhost/update-profile/update-telegram" method="POST" request="duymedia">
                  <input type="hidden" name="_token" defaultValue="74MWlYh5oxLJkt98IbkaqrLAfho78k9mCdLZkOZF" />                                        <div className="mb-3">
                    <label htmlFor="telegramId" className="form-label">Telegram ID:</label>
                    <input className="form-control" type="text" name="telegram_id" id="telegramId" defaultValue />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="botLink" className="form-label">Link Join Bot:</label>
                    <input className="form-control" type="text" id="botLink" defaultValue onclick="openNewTab()" readOnly />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary w-100">Lưu ngay</button>
                  </div>
                </form>
                {/* Form thứ hai */}
                <form action="https://localhost/update-profile/update-telegram" method="POST" request="duymedia">
                  <input type="hidden" name="_token" defaultValue="74MWlYh5oxLJkt98IbkaqrLAfho78k9mCdLZkOZF" />                                        <div className="form-group mb-3 row">
                    <label htmlFor className="form-label col-md-3">Trạng thái Telegram</label>
                    <div className="col-md-9">
                      <span>
                        <i className="ti ti-x bg-danger rounded text-white fs-5" /> Chưa liên
                        kết
                        <b className="text-primary">(Liên kết telegram nhận ngay
                          0 vnđ)</b>
                        <p>Nhấn vào <a className="text-info" href target="_blank">Đây</a> để liên kết</p>
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary col-12">
                      <i className="ti ti-lock me-2 fs-4" /> Lưu dữ liệu
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card custom-card">
            <div className="card-header">
              <h3 className="card-title">Lịch sử hoạt động</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div id="datatable-custom1_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                  <div className="row dt-row">
                    <div className="col-sm-12">
                      <table id="datatable-custom1" className="table table-bordered text-nowrap dataTable no-footer" style={{width: '100%'}} aria-describedby="datatable-custom1_info">
                        <thead>
                          <tr>
                            <th className="sorting sorting_desc" tabIndex={0} aria-controls="datatable-custom1" rowSpan={1} colSpan={1} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: '32.4px'}}>#</th>
                            <th className="sorting" tabIndex={0} aria-controls="datatable-custom1" rowSpan={1} colSpan={1} aria-label="Địa chỉ IP: activate to sort column ascending" style={{width: '169.2px'}}>Địa chỉ IP</th>
                            <th className="sorting" tabIndex={0} aria-controls="datatable-custom1" rowSpan={1} colSpan={1} aria-label="Nội dung: activate to sort column ascending" style={{width: '375.2px'}}>Nội dung</th>
                            <th className="sorting" tabIndex={0} aria-controls="datatable-custom1" rowSpan={1} colSpan={1} aria-label="Ngày hoạt động: activate to sort column ascending" style={{width: '137.2px'}}>Ngày hoạt động</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd">
                            <td className="sorting_1">285</td>
                            <td />
                            <td>Đăng nhập tài khoản địa chỉ ip ::1</td>
                            <td>2024-09-29 13:29:53</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


  );
};

export default Profile;
