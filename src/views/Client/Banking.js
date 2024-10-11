import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import { fetchRecharge } from "../../api/apiRecharge";


const Banking = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bankAccounts, setBankAccounts] = useState([]); 
  const [activeTab, setActiveTab] = useState(0); 
  const [isFetching, setIsFetching] = useState(false);
  const [transactions, setTransactions] = useState([]); // For storing transaction data
  const [isFetchingTransactions, setIsFetchingTransactions] = useState(false); // For fetching state
  const navigate = useNavigate(); 

  useEffect(() => {
    document.title = "Nạp tiền";
    fetchBankAccounts(); 
    fetchTransactionHistory(); // Fetch transactions on component mount
  }, []);

  const fetchBankAccounts = async () => {
    setIsFetching(true); 
    try {
      const response = await axios.post('http://localhost/api/get-bank'); 
      if (response.data.status === "success") {
        setBankAccounts(response.data.data); 
      } else {
        setError("Không có thông tin ngân hàng.");
      }
    } catch (error) {
      setError("Không thể lấy thông tin ngân hàng. Vui lòng thử lại.");
    } finally {
      setIsFetching(false); 
    }
  };

  // Function to fetch transaction history using the new API
  const fetchTransactionHistory = async () => {
    setIsFetchingTransactions(true);
    try {
      const transactionData = await fetchRecharge(); // Gọi hàm fetchRecharge từ apiBanking.js
      if (transactionData) {
        setTransactions(transactionData); // Giả định rằng transactionData là mảng các giao dịch
      } else {
        setError("Không có thông tin giao dịch.");
      }
    } catch (error) {
      setError("Không thể lấy thông tin giao dịch. Vui lòng thử lại.");
    } finally {
      setIsFetchingTransactions(false); 
    }
  };

  const handleTabClick = (index) => {
    setActiveTab(index); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 

    const _formData = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const response = await axios.post('http://127.0.0.1/api/get-bank', _formData);
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user)); 
        localStorage.setItem("api_token", response.data.token); 
        localStorage.setItem("username", response.data.user.username); 

        setSuccessMessage(response.data.message);
        setError(null); 
        navigate('/home'); 
      }
    } catch (error) {
      if (error.response?.status === 422) {
        setError(error.response.data.errors);
      } else {
        setError(error.response?.data.message || "Đăng nhập thất bại. Vui lòng thử lại sau.");
      }
      setSuccessMessage(null);
    } finally {
      setIsSubmitting(false); 
    }

  };
  const getBankTypeClass = (type) => {
    switch (type) {
      case 'MBBANK':
        return 'text-info';
      case 'VCB':
        return 'text-success';
      case 'ACB':
        return 'text-primary';
      case 'TPBank':
        return 'text-warning'; // Màu cam
      case 'TCBank':
        return 'text-danger'; // Màu đỏ
      default:
        return '';
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Column: Hướng dẫn nạp tiền */}
        <div className="col-md-6">
          <div className="card custom-card">
            <div className="card-header">
              <h4 className="card-title">Hướng dẫn nạp tiền</h4>
            </div>
            <div className="card-body">
              <ol>
                <li>Chọn ngân hàng phù hợp từ danh sách bên dưới.</li>
                <li>Sao chép thông tin tài khoản ngân hàng.</li>
                <li>Chuyển tiền vào tài khoản đã chọn với nội dung nạp tiền.</li>
                <li>Quét mã QR nếu cần để thanh toán nhanh.</li>
                <li>Sau khi chuyển khoản thành công, số dư sẽ được cập nhật tự động.</li>
                <li>Nếu có bất kỳ vấn đề nào, vui lòng liên hệ hỗ trợ.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Right Column: Tab Ngân hàng */}
        <div className="col-md-6">
          <div className="card custom-card">
            <div className="card-body">
              <ul className="nav nav-pills mb-3 nav-justified" id="pills-tab" role="tablist">
                {bankAccounts.map((account, index) => (
                  <li className="nav-item" role="presentation" key={account.id}>
                    <a
                      className={`nav-link ${activeTab === index ? 'active' : ''}`}
                      onClick={() => handleTabClick(index)} 
                    >
                      <img
                        src={account.logo}
                        width={18}
                        style={{ marginBottom: 3 }}
                        className="me-2"
                        alt={`${account.type} logo`}
                      />
                    </a>
                  </li>
                ))}
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${activeTab === bankAccounts.length ? 'active' : ''}`}
                    onClick={() => handleTabClick(bankAccounts.length)} 
                  >
                    Other Method
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                {bankAccounts.map((account, index) => (
                  <div
                    className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                    id={`pills-pay_${index}`}
                    key={account.id}
                  >
                    {/* Bank account details */}
                    <div className="box">
                      <div className="text-center fw-bold">
                        <div className="bank-info">
                          <span>Ngân hàng:</span>
                          <span className="text-danger">{account.type}</span>
                        </div>
                        <div className="bank-info">
                          <span>Số tài khoản:</span>
                          <span className="text-danger">{account.account_number}</span>
                        </div>
                        <div className="bank-info">
                          <span>Chủ tài khoản:</span>
                          <span className="text-danger">{account.account_name}</span>
                        </div>
                        <div className="bank-info">
                          <span>Nội dung chuyển:</span>
                          <span className="text-danger">naptien22</span>
                        </div>
                        <div className="bank-info">
                          <span>Mã QR:</span>
                          <div className="qr-container">
                            <img className="img-fluid qr-image" alt={`${account.type} QR Code`} src={account.qr_code} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Other method content */}
                <div className={`tab-pane fade ${activeTab === bankAccounts.length ? 'show active' : ''}`}>
                  <div className="box">
                    <div className="text-center">
                      {/* Form for "Other Method" */}
                      <form method="POST" action="https://localhost/transfer" id="payment-form">
                        <input type="hidden" name="_token" value="hFj6wj5zdJ1Kdsa8v9rG5GJPlbM1a91AmLwFEhH6" />
                        <div className="mb-3">
                          <label htmlFor="qr_code" className="form-label">Mã QR:</label>
                          <img className="img-fluid qr-image" alt="QR Code" src="#" />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="amount" className="form-label">Nhập số tiền:</label>
                          <input type="number" className="form-control" id="amount" name="amount" min={1} placeholder="Nhập số tiền" />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Nạp tiền</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Section */}
      <div className="card custom-card mt-4">
        <div className="card-header">
          <h4 className="card-title">Lịch sử giao dịch</h4>
        </div>
        <div className="card-body">
          {isFetchingTransactions ? (
            <p>Đang tải lịch sử giao dịch...</p>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Mã chuyển khoản</th>
                  <th>Ngân hàng</th>
                  <th>Số tiền</th>
                  <th>Nội dung</th>
                  <th>Trạng thái</th>
                  <th>Thời gian</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.id}</td>
                    <td>{transaction.tranid}</td>
                    <td className={getBankTypeClass(transaction.type_bank)}>
                          {transaction.type_bank}
                        </td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.note}</td>
                    <td className="text-success">{transaction.status}</td>
                    <td>{new Date(transaction.created_at).toLocaleString()}</td>
                  </tr>
                ))}
                {transactions.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center">Không có giao dịch nào.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banking;
