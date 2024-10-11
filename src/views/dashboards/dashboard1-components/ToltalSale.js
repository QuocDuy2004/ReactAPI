import React, { useEffect, useState } from "react";
import { getUserInfo } from "../../../api/userAPI";

const TotalSale = () => {
  const [balance, setBalance] = useState(0);
  const [totalRecharge, setTotalRecharge] = useState(0);
  const [totalDeduct, setTotalDeduct] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = await getUserInfo(); // Call the API function
        setBalance(user.balance);
        setTotalRecharge(user.total_recharge);
        setTotalDeduct(user.total_deduct);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // End loading state
      }
    };

    fetchUserInfo(); // Call the function to fetch user info
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
        <div className="row total-sales-card-section">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xl-4">
            <div className="card custom-card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h6 className="fw-normal fs-14">Số dư hiện tại</h6>
                    <h3 className="mb-2 number-font fs-24">₫{balance}</h3>
                    <p className="text-muted mb-0">
                      <span className="text-success">
                        <i className="ri-arrow-up-s-line bg-success text-white rounded-circle fs-13 p-0 fw-semibold align-bottom" />
                        0.00%
                      </span>{" "}
                      vào tháng trước
                    </p>
                  </div>
                  <div className="col col-auto mt-2">
                    <div
                      className="d-flex justify-content-center align-items-center counter-icon bg-success-gradient box-shadow-success rounded-circle ms-auto mb-0"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className="fa-solid fa-dollar-sign" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xl-4">
            <div className="card custom-card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h6 className="fw-normal fs-14">Tổng tiền nạp tháng</h6>
                    <h3 className="mb-2 number-font fs-24">₫{totalRecharge}</h3>
                    <p className="text-muted mb-0">
                      <span className="text-success">
                        <i className="ri-arrow-up-s-line bg-success text-white rounded-circle fs-13 p-0 fw-semibold align-bottom" />
                        0.00%
                      </span>{" "}
                      vào tháng trước
                    </p>
                  </div>
                  <div className="col col-auto mt-2">
                    <div
                      className="d-flex justify-content-center align-items-center counter-icon bg-success-gradient box-shadow-success rounded-circle ms-auto mb-0"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className="fa-solid fa-receipt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xl-4">
            <div className="card custom-card overflow-hidden">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h6 className="fw-normal fs-14">Tổng đơn của bạn</h6>
                    <h3 className="mb-2 number-font fs-24">{totalDeduct}</h3>
                    <p className="text-muted mb-0">
                      <span className="text-success">
                        <i className="ri-arrow-up-s-line bg-success text-white rounded-circle fs-13 p-0 fw-semibold align-bottom" />
                        0.00%
                      </span>{" "}
                      vào tháng trước
                    </p>
                  </div>
                  <div className="col col-auto mt-2">
                    <div
                      className="d-flex justify-content-center align-items-center counter-icon bg-success-gradient box-shadow-success rounded-circle ms-auto mb-0"
                      style={{ width: 50, height: 50 }}
                    >
                      <i className="fa-solid fa-shopping-cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Các phần card khác nếu cần */}
        </div>
      </div>
    </div>
  );
};

export default TotalSale;
