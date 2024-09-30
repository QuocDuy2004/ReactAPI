import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    FormControl,
    MenuItem,
    Select,
} from "@mui/material";

import ExTable from "./ExTable";

const ListServices = () => {
    const [age, setAge] = React.useState("10");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Card variant="outlined">
            <CardContent>
       
                    <h1 className="text-center text-dark mb-4">
                        Dịch vụ Facebook
                    </h1>
                    <div className="row text-center">
                        <div className="col-6 col-md-4 mb-3">
                            <a
                                href="https://localhost/service/facebook/like"
                                className="btn btn-light w-100 p-3"
                            >
                                <img
                                    src="https://2mxh.com/assets/images/category/facebook/like-post.svg"
                                    alt="like"
                                    className="img-fluid mb-2"
                                    style={{ marginRight: "10px" }}
                                />
                                <h5 className="text-dark">Like</h5>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 mb-3">
                            <a
                                href="https://localhost/service/facebook/sub"
                                className="btn btn-light w-100 p-3"
                            >
                                <img
                                    src="https://2mxh.com/assets/images/category/facebook/like-post.svg"
                                    alt="sub1"
                                    className="img-fluid mb-2"
                                    style={{ marginRight: "10px" }}
                                />
                                <h5 className="text-dark">Sub1</h5>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 mb-3">
                            <a
                                href="https://localhost/service/facebook/sub"
                                className="btn btn-light w-100 p-3"
                            >
                                <img
                                    src="https://2mxh.com/assets/images/category/facebook/like-post.svg"
                                    alt="sub1"
                                    className="img-fluid mb-2"
                                    style={{ marginRight: "10px" }}
                                />
                                <h5 className="text-dark">Sub1</h5>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-center text-dark mt-5 mb-4">
                        Dịch vụ TikTok
                    </h1>
                    <div className="row text-center">
                    <div className="col-6 col-md-4 mb-3">
                            <a
                                href="https://localhost/service/facebook/sub"
                                className="btn btn-light w-100 p-3"
                            >
                                <img
                                    src="https://2mxh.com/assets/images/category/facebook/like-post.svg"
                                    alt="sub1"
                                    className="img-fluid mb-2"
                                    style={{ marginRight: "10px" }}
                                />
                                <h5 className="text-dark">Sub1</h5>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 mb-3">
                            <a
                                href="https://localhost/service/facebook/sub"
                                className="btn btn-light w-100 p-3"
                            >
                                <img
                                    src="https://2mxh.com/assets/images/category/facebook/like-post.svg"
                                    alt="sub1"
                                    className="img-fluid mb-2"
                                    style={{ marginRight: "10px" }}
                                />
                                <h5 className="text-dark">Sub1</h5>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 mb-3">
                            <a
                                href="https://localhost/service/facebook/sub"
                                className="btn btn-light w-100 p-3"
                            >
                                <img
                                    src="https://2mxh.com/assets/images/category/facebook/like-post.svg"
                                    alt="sub1"
                                    className="img-fluid mb-2"
                                    style={{ marginRight: "10px" }}
                                />
                                <h5 className="text-dark">Sub1</h5>
                            </a>
                        </div>
                    </div>
                <Box
                    sx={{
                        overflow: "auto",
                        mt: 3,
                    }}
                >
                    <ExTable />
                </Box>
            </CardContent>
        </Card>
    );
};

export default ListServices;
