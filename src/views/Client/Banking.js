import React from "react";

const Banking = () => {
  // 2

  return (
  
  <div className="container-fluid">
    {/* Page Header */}
    <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
      <div className="ms-auto pageheader-btn">
        <button type="button" className="btn btn-primary btn-wave waves-effect waves-light me-2">
          <i className="fa fa-plus mx-1 align-middle" />Số dư: <span className="user-balance">₫998.00</span>
        </button>
      </div>
    </div>
    {/* Page Header Close */}
    <div className="row">
      {/* Instruction Section */}
      <div className="col-md-6">
        <div className="card custom-card">
          <div className="card-header">
            <h3 className="card-title">Hướng dẫn nạp tiền</h3>
          </div>
          <div className="card-body">
            <p>- Vui lòng nạp đúng theo nội dung đã hiện.<br />
              - Khi đã chuyển khoản bạn hãy vui lòng đợi 1-&gt;5p để tiền được duyệt auto.<br />
              - Nếu sai nội dung bạn sẽ phải ib admin để xử lý. Khi xử lý xong bạn sẽ bị trừ 10% phí nạp
            </p>
          </div>
        </div>
      </div>
      {/* Tabs for Payment Methods */}
      <div className="col-md-6">
        <div className="card custom-card">
          <div className="card-body">
            <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="pills-pay-tab_0" data-bs-toggle="pill" href="#pills-pay_0" role="tab" aria-controls="pills-pay_0" aria-selected="true">
                  <img src="https://subgiare.vn/assets/images/momo.png" width={18} style={{marginBottom: 3}} className="me-2" />
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link " id="pills-pay-tab_1" data-bs-toggle="pill" href="#pills-pay_1" role="tab" aria-controls="pills-pay_1" aria-selected="false" tabIndex={-1}>
                  <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" width={18} style={{marginBottom: 3}} className="me-2" />
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" id="pills-other-tab" data-bs-toggle="pill" href="#pills-other" role="tab" aria-controls="pills-other" aria-selected="false" tabIndex={-1}>Other Method</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-pay_0" role="tabpanel" aria-labelledby="pills-pay-tab_0">
                <div className="box">
                  <div className="text-center fw-bold">
                    <div className="bank-info">
                      <span>Ngân hàng:</span>
                      <span className="text-danger">MOMO</span>
                    </div>
                    <div className="bank-info">
                      <span>Số tài khoản:</span>
                      <span className="text-danger">0334713016
                      </span>
                    </div>
                    <div className="bank-info">
                      <span>Chủ tài khoản:</span>
                      <span className="text-danger">PHAM QUOC DUY</span>
                    </div>
                    <div className="bank-info">
                      <span>Nội dung chuyển:</span>
                      <span className="text-danger">naptien22
                        
                      </span>
                    </div>
                    <div className="bank-info">
                      <span>Mã QR:</span>
                      <div className="qr-container">
                        {/* URL QR Code cho Momo */}
                        <img id="methodLogo" className="img-fluid qr-image" alt="Momo QR Code" src="https://api.qrserver.com/v1/create-qr-code?size=200x200&cht=qr&data=2|99|0334713016|||0|0|0|naptien22|transfer_myqr" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade " id="pills-pay_1" role="tabpanel" aria-labelledby="pills-pay-tab_1">
                <div className="box">
                  <div className="text-center fw-bold">
                    <div className="bank-info">
                      <span>Ngân hàng:</span>
                      <span className="text-danger">MBBANK</span>
                    </div>
                    <div className="bank-info">
                      <span>Số tài khoản:</span>
                      <span className="text-danger">1399999909
                        <a href="javascript:void(0)" onclick="copy('number_1')" className="copy" data-clipboard-text={1399999909}>
                          <i className="fas fa-copy" />
                        </a>
                      </span>
                    </div>
                    <div className="bank-info">
                      <span>Chủ tài khoản:</span>
                      <span className="text-danger">PHAM QUOC DUY</span>
                    </div>
                    <div className="bank-info">
                      <span>Nội dung chuyển:</span>
                      <span className="text-danger">naptien22
                        <a href="javascript:void(0)" onclick="copy('content_codeRecharge');" className="copy" data-clipboard-text="naptien22">
                          <i className="fas fa-copy" />
                        </a>
                      </span>
                    </div>
                    <div className="bank-info">
                      <span>Mã QR:</span>
                      <div className="qr-container">
                        {/* URL QR Code cho các ngân hàng khác */}
                        <img id="methodLogo" className="img-fluid qr-image" alt="VietQR Image" src="https://api.vietqr.io/mbbank/1399999909/0/naptien22/qronly2.jpg?accountName=PHAM+QUOC+DUY&bankName=MBBANK&promotion=0&maxCharge=1000000000" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
                <div className="box">
                  <div className="text-center">
                    {/* Form Nhập Số Tiền */}
                    <form method="POST" action="https://localhost/transfer" id="payment-form">
                      <input type="hidden" name="_token" defaultValue="hFj6wj5GBJxoxqIc9d26nBk2yZ0rd8LBUiFVLQdL" />                                                <div className="mb-3">
                        <label htmlFor="payment_type" className="form-label">Chọn loại thanh
                          toán:</label>
                        <select name="payment_type" id="payment_type" className="form-control" required>
                          <option value disabled selected>Chọn loại thanh toán
                          </option>
                        </select>
                      </div>
                      {/* Account number and QR Code container */}
                      <div className="mb-3" id="account-info-container" style={{display: 'none'}}>
                        <div className="card p-3">
                          {/* Account number */}
                          <div className="mb-2">
                            <label htmlFor="account_number" className="form-label">Số tài
                              khoản:</label>
                            <div id="account_number" className="form-control-plaintext" />
                            {/* Thay thế input bằng div */}
                          </div>
                          {/* QR Code */}
                          <div className="mb-2 text-center">
                            <label htmlFor="qr_code" className="form-label">Mã QR:</label>
                            <img id="qr_code_image" src alt="QR Code" style={{maxWidth: 200, display: 'block', margin: '0 auto'}} />
                          </div>
                        </div>
                      </div>
                      {/* Amount container */}
                      <div className="mb-3" id="amount-container">
                        <label htmlFor="amount" className="form-label">Số tiền:</label>
                        <input type="number" id="amount" name="amount" step="0.01" min={0} className="form-control" required />
                      </div>
                      {/* Submit button */}
                      <button type="submit" className="btn btn-primary" id="submit-button">Xác
                        nhận thanh toán</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Transaction History Section */}
      <div className="col-12">
        <div className="card custom-card">
          <div className="card-header">
            <h3 className="card-title">Lịch sử nạp tiền</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive df-example demo-table">
              <div id="datatable_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                <div className="row">
                  <div className="col-sm-12 col-md-6" />
                </div>
                <div className="row dt-row">
                  <div className="col-sm-12">
                    <table className="table table-bordered table-striped datatable text-nowrap dataTable no-footer" id="testds" aria-describedby="datatable_info">
                      <thead>
                        <tr>
                          <th className="sorting sorting_desc" tabIndex={0} aria-controls="datatable" rowSpan={1} colSpan={1} aria-sort="descending" aria-label="#: activate to sort column ascending" style={{width: '45.425px'}}>#</th>
                          <th className="sorting" tabIndex={0} aria-controls="datatable" rowSpan={1} colSpan={1} aria-label="Cổng thanh toán: activate to sort column ascending" style={{width: '144.062px'}}>Cổng thanh toán</th>
                          <th className="sorting" tabIndex={0} aria-controls="datatable" rowSpan={1} colSpan={1} aria-label="Mã giao dịch: activate to sort column ascending" style={{width: '112.537px'}}>Mã giao dịch</th>
                          <th className="sorting" tabIndex={0} aria-controls="datatable" rowSpan={1} colSpan={1} aria-label="Thực nhận: activate to sort column ascending" style={{width: '165.85px'}}>Thực nhận</th>
                          <th className="sorting" tabIndex={0} aria-controls="datatable" rowSpan={1} colSpan={1} aria-label="Nội dung: activate to sort column ascending" style={{width: '146.65px'}}>Nội dung</th>
                          <th className="sorting" tabIndex={0} aria-controls="datatable" rowSpan={1} colSpan={1} aria-label="Thời gian: activate to sort column ascending" style={{width: '136.425px'}}>Thời gian</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Banking;
