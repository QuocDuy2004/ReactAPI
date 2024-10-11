import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchOrders } from "../../api/apiOrders";

const Orders = () => {
    const [error, setError] = useState(null);
    const [servicesData, setServicesData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState(""); // Từ khóa tìm kiếm
    const [statusFilter, setStatusFilter] = useState(""); // Trạng thái tìm kiếm
    const itemsPerPage = 20;

    useEffect(() => {
        document.title = "Orders";
        fetchOrdersData(); // Lấy dữ liệu đơn hàng
    }, []);

    // Hàm lấy dữ liệu đơn hàng
    const fetchOrdersData = async (searchParams = {}) => {
        try {
            const data = await fetchOrders(searchParams); // Gửi params tìm kiếm
            setServicesData(data);
        } catch (error) {
            setError(error.message || "Không thể lấy thông tin dịch vụ. Vui lòng thử lại.");
        }
    };

    // Hàm xử lý tìm kiếm
    const handleSearch = (e) => {
        e.preventDefault(); // Ngăn chặn gửi biểu mẫu
        fetchOrdersData({ 
            search: searchTerm,
            status: statusFilter // Gửi trạng thái tìm kiếm
        }); 
    };

    // Pagination handling
    const offset = currentPage * itemsPerPage;
    const currentItems = servicesData.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(servicesData.length / itemsPerPage);

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    return (
        <div className="container-fluid">
            <div className="card custom-card">
                <div className="card-header">
                    <h3 className="card-title">Quản lý đơn hàng</h3>
                </div>
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>} {/* Hiển thị thông báo lỗi nếu có */}
                    
                    {/* Biểu mẫu tìm kiếm */}
                    <form onSubmit={handleSearch} className="mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tìm kiếm theo mã đơn hàng, dịch vụ..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật từ khóa tìm kiếm
                            />
                            <select
                                className="form-select"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)} // Cập nhật trạng thái tìm kiếm
                            >
                                <option value="">Tất cả trạng thái</option>
                                <option value="Pending">Đang chờ</option>
                                <option value="Completed">Đã hoàn thành</option>
                                <option value="Canceled">Đã hủy</option>
                                {/* Thêm các trạng thái khác nếu cần */}
                            </select>
                            <button className="btn btn-primary" type="submit">Tìm kiếm</button>
                        </div>
                    </form>

                    <div className="table-responsive">
                        <table className="table table-bordered text-nowrap table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Mã đơn hàng</th>
                                    <th className="text-center">Dịch vụ</th>
                                    <th>Giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng thanh toán</th>
                                    <th>Liên kết đơn hàng</th>
                                    <th>Bắt đầu</th>
                                    <th>Đã chạy</th>
                                    <th>Trạng thái</th>
                                    <th>Thời gian tạo</th>
                                    <th>Thời gian cập nhật</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id} className={item.status === "Pending" ? "table-warning" : item.status === "Completed" ? "table-success" : item.status === "Canceled" ? "table-danger" : ""}>
                                        <td>{item.id}</td>
                                        <td className="text-center text-danger">{item.order_code}</td>
                                        <td className="text-center text-info">{item.service_name}</td>
                                        <td className="text-center">{item.price}</td>
                                        <td className="text-center">{item.quantity}</td>
                                        <td className="text-center text-success">{item.total_payment}</td>
                                        <td>{item.order_link}</td>
                                        <td className="text-center text-danger">{item.start}</td>
                                        <td className="text-center text-success">{item.buff}</td>
                                        <td className="text-center">{item.status}</td>
                                        <td>{new Date(item.created_at).toLocaleString()}</td>
                                        <td>{new Date(item.updated_at).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Component phân trang */}
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center my-4">
                            <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => handlePageClick({ selected: currentPage - 1 })} aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            {[...Array(pageCount)].map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageClick({ selected: index })}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === pageCount - 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => handlePageClick({ selected: currentPage + 1 })} aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Orders;
