import React from "react";

import { Card, CardContent, Box, Typography } from "@mui/material";

const CreateWebsite = () => {
    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    {/* Page Header */}
                    <div className="col-md-12 mx-auto">
                        <div className="alert alert-warning" role="alert">
                            - Bạn phải đạt cấp bậc cộng tác viên hoặc đại lý mới
                            có thể tạo web con! <br />
                            - Nghiêm cấm các tên miền có chữ: Facebook,
                            Instagram để tránh bị vi phạm bản quyền. <br />
                            - Khách hàng tạo tài khoản và sử dụng dịch vụ ở site
                            con. Tiền sẽ trừ vào tài khoản của đại lý ở site
                            chính. Vì thế để khách hàng mua được tài khoản đại
                            lý phải còn số dư. <br />- Chúng tôi hỗ trợ mục đích
                            kinh doanh của tất cả cộng tác viên và đại lý!
                        </div>
                    </div>
                    {/* Page Header Close */}
                    <div className="card custom-card">
                        <div className="card-header">
                            <h3 className="card-title">Tạo website riêng</h3>
                        </div>
                        <div className="card-body">
                            <div className="mb-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* Empty Column (if needed) */}
                                    </div>
                                    {/* API Token Section */}
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label
                                                htmlFor="api_token"
                                                className="form-label"
                                            >
                                                API Token
                                            </label>
                                            <div className="input-group">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    defaultValue="JnopOJdzWn2NPGApx1rGc7l90tsOtRx2tsIh3NIBXDEiqnPxXnV0YFYDj1TxYGNwQ49NnTd5auwkAsoi"
                                                    id="api_token"
                                                    readOnly
                                                />
                                                <button
                                                    type="button"
                                                    id="btnReload"
                                                    className="btn btn-primary"
                                                >
                                                    <i className="fa fa-sync" />{" "}
                                                    Thay đổi
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Domain Input Form */}
                                    <div className="col-md-12">
                                        <form
                                            action="https://localhost/create-website"
                                            method="POST"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                defaultValue="hFj6wj5GBJxoxqIc9d26nBk2yZ0rd8LBUiFVLQdL"
                                            />{" "}
                                            <input
                                                type="hidden"
                                                defaultValue="JnopOJdzWn2NPGApx1rGc7l90tsOtRx2tsIh3NIBXDEiqnPxXnV0YFYDj1TxYGNwQ49NnTd5auwkAsoi"
                                                name="api_token"
                                            />
                                            <div className="form-group mb-3">
                                                <label
                                                    htmlFor="domain"
                                                    className="form-label"
                                                >
                                                    Tên miền
                                                </label>
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="domain"
                                                        name="domain"
                                                        placeholder="Tên miền"
                                                        defaultValue
                                                    />
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        <i className="fas fa-save" />{" "}
                                                        Lưu Miền Ngay
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-12 mx-auto">
                                        <div
                                            className="alert alert-success "
                                            role="alert"
                                        >
                                            <p className="fw-bold">
                                                Hướng dẫn tạo website:
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    - Bước 1 :
                                                </span>{" "}
                                                <span>
                                                    Bạn cần phải có tên miền,
                                                    nếu chưa bạn có thể mua tên
                                                    miền tại{" "}
                                                    <a
                                                        href="http://tenten.vn"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className
                                                    >
                                                        tenten.vn
                                                    </a>{" "}
                                                    (đọc lưu ý trước khi mua).
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    - Bước 2 :
                                                </span>{" "}
                                                <span>
                                                    Trỏ Nameserver1:{" "}
                                                    <b className="text-info" />
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    - Bước 3 :
                                                </span>{" "}
                                                <span>
                                                    Trỏ Nameserver2:{" "}
                                                    <b className="text-info" />
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    - Bước 4 :
                                                </span>{" "}
                                                <span>
                                                    Sau khi đã trỏ Nameserver
                                                    bạn hãy liên hệ zalo:{" "}
                                                    <b className="text-white">
                                                        <a
                                                            href
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className
                                                        />
                                                    </b>
                                                    để hỗ trợ kích hoạt.
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    - Bước 5 :
                                                </span>{" "}
                                                Truy cập vào trang của bạn và
                                                nhập api token (lưu ý trước lúc
                                                kích hoạt api token không được
                                                để lộ tên miền tránh bị kích
                                                hoạt tài khoản admin).
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
};

export default CreateWebsite;
