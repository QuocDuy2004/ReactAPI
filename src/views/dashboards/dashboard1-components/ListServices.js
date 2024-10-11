import React, { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    CircularProgress,
} from "@mui/material";

import ExTable from "./ExTable";
import { fetchServices } from "../../../api/apiServices";

const ListServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getServices = async () => {
            try {
                const data = await fetchServices();
                setServices(data); // Lưu dữ liệu vào state
                setLoading(false);
            } catch (err) {
                setError(err.message); // Lưu lỗi vào state
                setLoading(false);
            }
        };

        getServices();
    }, []);

    // Hàm để chọn icon dựa trên category
    const getIcon = (category) => {
        switch (category) {
            case "like":
                return "https://2mxh.com/assets/images/icons/like.svg"; // Đường dẫn icon like
            case "comment":
                return "https://2mxh.com/assets/images/icons/comment.svg"; // Đường dẫn icon comment
            case "eye":
                return "https://2mxh.com/assets/images/icons/eye.svg"; // Đường dẫn icon eye
            case "follow":
                return "https://2mxh.com/assets/images/icons/follow.svg"; // Đường dẫn icon follow
            default:
                return "https://2mxh.com/assets/images/icons/default.svg"; // Đường dẫn icon mặc định
        }
    };

    // Nhóm dịch vụ theo platform
    const groupedServices = services.reduce((acc, service) => {
        if (!acc[service.platform]) {
            acc[service.platform] = []; // Tạo mảng mới nếu chưa có
        }
        acc[service.platform].push(service); // Thêm dịch vụ vào nhóm
        return acc;
    }, {});

    return (
        <Card variant="outlined">
            <CardContent>
                {loading ? (
                    <Box display="flex" justifyContent="center" my={2}>
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" className="text-center">
                        {error}
                    </Typography>
                ) : (
                    <>
                        {Object.keys(groupedServices).map((platform) => (
                            <div key={platform}>
                                <Typography>
                                    <h1 className="text-center text-dark mb-4">
                                        Dịch vụ {platform}
                                    </h1>
                                </Typography>
                                <div className="row text-center">
                                    {groupedServices[platform].map((service) => (
                                        <div className="col-6 col-md-4 mb-3" key={service.category}>
                                            <a
                                                href={`https://localhost/service/${platform.toLowerCase()}/${service.category}`}
                                                className="btn btn-light w-100 p-3"
                                            >
                                                <img
                                                    src={getIcon(service.category)} // Sử dụng hàm getIcon để lấy icon
                                                    alt={service.category}
                                                    className="img-fluid mb-2"
                                                    style={{ marginRight: "10px" }}
                                                />
                                                <h5 className="text-dark">
                                                    {service.category} {/* Hiển thị category */}
                                                </h5>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                )}

                <Box
                    sx={{
                        overflow: "auto",
                        mt: 3,
                    }}
                >
                    <ExTable services={services} /> {/* Truyền dữ liệu dịch vụ cho ExTable nếu cần */}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ListServices;
