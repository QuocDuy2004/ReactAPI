import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../../api/userAPI";
import Select, { components } from "react-select";
import { fetchServices } from "../../api/apiServices";
import { createOrder } from "../../api/apiCreateOrder";
import toastr from 'toastr';

// Custom option component for Select with icon display
const CustomOption = (props) => {
  const { data } = props; 

  return (
    <components.Option {...props}>
      {data.icon?.startsWith("http") ? (
        <img
          src={data.icon}
          alt={data.label}
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
      ) : (
        <i className={`fas fa-${data.icon}`} style={{ marginRight: "8px" }}></i>
      )}
      {data.label}
    </components.Option>
  );
};

const New = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    api_token: '',
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [platformOptions, setPlatformOptions] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const [servicesData, setServicesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();
  const [balance, setBalance] = useState(0);
  const [totalRecharge, setTotalRecharge] = useState(0);
  const [totalDeduct, setTotalDeduct] = useState(0);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState(0);
  const [api_token, setToken] = useState('');
  const [lang, setLang] = useState('');
  const [created_at, setCreated_at] = useState('');
  const [updated_at, setUpdate_at] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Tạo đơn hàng";
    fetchServiceOptions();
    setFormData();
    setFormData();
  }, []);

  const fetchServiceOptions = async () => {
    try {
      const services = await fetchServices(); 
      setServicesData(services);

      const platforms = [...new Set(services.map(service => service.platform))].map(platform => {
        let iconUrl;
        if (platform === "Facebook") {
          iconUrl = "https://smmkay.com/img/files/2257a7d085ea4048e1f580e07af2fe34.png";
        } else if (platform === "TikTok") {
          iconUrl = "https://smmkay.com/img/files/tiktok.png";
        } else {
          iconUrl = "https://example.com/default-icon.png";
        }

        return {
          value: platform,
          label: platform,
          icon: iconUrl,
        };
      });

      const categories = [...new Set(services.map(service => service.category))].map(category => {
        let icon;
        if (category === "like") {
          icon = "thumbs-up";
        } else if (category === "comment") {
          icon = "comments";
        } else {
          icon = "star";
        }

        return {
          value: category,
          label: category,
          icon: icon,
        };
      });

      setServiceOptions(services.map(service => ({
        value: service.service,
        label: `ID: ${service.service} | ${service.name} | ${service.rate} $`,
        rate: service.rate,
        description: service.description,
        min: service.min,
        max: service.max,
      })));
      setPlatformOptions(platforms);
      setCategoryOptions(categories);
    } catch (error) {
      toastr.error(error.message); 
    }
  };

  const handlePlatformChange = (selectedPlatform) => {
    const filteredCategories = servicesData
      .filter(service => service.platform === selectedPlatform.value)
      .map(service => ({
        value: service.category,
        label: service.category,
        icon: service.category === "like" ? "thumbs-up" : "comments",
      }));

    setFilteredCategories(filteredCategories);
  };

  const handleCategoryChange = (selectedCategory) => {
    const filteredServices = servicesData
      .filter(service => service.category === selectedCategory.value)
      .map(service => ({
        value: service.service,
        label: `${service.service} | ${service.name} | ${service.rate}`,
        rate: service.rate,
        description: service.description,
        min: service.min,
        max: service.max,
      }));

    setFilteredServices(filteredServices);
  };

  const handleServiceChange = (selectedService) => {
    setSelectedService(selectedService);
    setPrice(selectedService.rate * quantity);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    if (selectedService) {
      setPrice(selectedService.rate * value);
    }
  };

  const filteredServiceOptions = serviceOptions.filter(option => 
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      service: selectedService?.value,
      quantity: quantity,
      link: link,
    };

    try {
      const message = await createOrder(orderData);
      toastr.success('Đơn hàng của bạn đã được tạo thành công!');

      setQuantity('');
      setLink('');
      setSelectedService(null);
    } catch (error) {
      toastr.error(error.message || 'Đã xảy ra lỗi khi tạo đơn hàng!');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="container-fluid">
    {error && <div className="alert alert-danger">{error}</div>}
    {successMessage && <div className="alert alert-success">{successMessage}</div>}
  
    <div className="row">
      {/* Phần Tạo Đơn Hàng */}
      <div className="col-12 col-lg-8 mx-auto">
        <div className="card shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="card-header bg-primary text-white">
            <h3 className="card-title">
              <i className="fas fa-plus-circle"></i> Tạo đơn hàng
            </h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 row">
                <div className="mb-4">
                  <label htmlFor="serviceSearch" className="form-label">
                    <i className="fas fa-search"></i> Tìm kiếm dịch vụ 
                  </label>
                  <input
                    type="text"
                    id="serviceSearch"
                    className="form-control"
                    placeholder="Nhập tên dịch vụ..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      // Update filtered services based on the search term
                      setFilteredServices(filteredServiceOptions);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="platform_id" className="form-label">
                    <i className="fas fa-desktop"></i> Nền tảng
                  </label>
                  <Select
                    name="platform"
                    options={platformOptions}
                    onChange={handlePlatformChange}
                    placeholder="Chọn nền tảng"
                    components={{ Option: CustomOption }}
                    className="custom-select"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category_id" className="form-label">
                    <i className="fas fa-tags"></i> Dịch vụ
                  </label>
                  <Select
                    name="category"
                    options={filteredCategories}
                    onChange={handleCategoryChange}
                    placeholder="Chọn phân loại"
                    components={{ Option: CustomOption }}
                    className="custom-select"
                  />
                </div>
              </div>
  
              <div className="mb-4">
                <label htmlFor="service_id" className="form-label">
                  <i className="fas fa-concierge-bell"></i> Máy chủ
                </label>
                <Select
                  name="service"
                  options={filteredServiceOptions}
                  onChange={handleServiceChange}
                  placeholder="Chọn dịch vụ"
                  components={{ Option: CustomOption }}
                  className="custom-select"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="link" className="form-label">
                  <i className="fas fa-link"></i> Link (nếu có)
                </label>
                <input
                  type="text"
                  id="link"
                  className="form-control"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="mb-4 row">
                <div className="col-md-6">
                  <label htmlFor="quantity" className="form-label">
                    <i className="fas fa-sort-numeric-up"></i> Số lượng
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="price" className="form-label">
                    <i className="fas fa-money-bill-wave"></i> Giá
                  </label>
                  <input
                    type="text"
                    id="price"
                    className="form-control"
                    value={price}
                    readOnly
                  />
                </div>
              </div>
  
              <button type="submit" className="btn btn-primary col-12" disabled={isSubmitting}>
                {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-check"></i>} {isSubmitting ? "Đang xử lý..." : "Thanh toán đơn hàng"}
              </button>
            </form>
          </div>
        </div>
      </div>
  
      {/* Phần Thông Tin Dịch Vụ */}
      <div className="col-12 col-lg-4 mx-auto mt-4">
        <div className="card shadow-lg transition-transform duration-300 hover:scale-105">
          <div className="card-header bg-info text-white">
            <h3 className="card-title">
              <i className="fas fa-info-circle"></i> Thông tin dịch vụ
            </h3>
          </div>
          <div className="card-body">
            {selectedService ? (
              <div className="service-info">
                {/* Khung Mô Tả */}
                <div className="mb-3">
                  <div className="description-box p-4 border rounded bg-light shadow-sm">
                    <p className="mb-0"><strong>Mô tả:</strong> {selectedService.description}</p>
                  </div>
                </div>
  
                {/* Khung Giá */}
                <div className="price-box flex justify-between">
                  <div className="min-box p-3 border rounded bg-success text-white shadow-sm flex-1 mr-2">
                    <p className="mb-0"><strong>Min:</strong> {selectedService.min} VND</p>
                  </div>
                  <div className="max-box p-3 border rounded bg-danger text-white shadow-sm flex-1 ml-2">
                    <p className="mb-0"><strong>Max:</strong> {selectedService.max} VND</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-muted text-center">Vui lòng chọn dịch vụ để hiển thị thông tin.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default New;