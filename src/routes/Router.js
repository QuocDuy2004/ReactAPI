import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout/AuthLayout.js")); // New layout for auth

/****End Layouts*****/

/*****Pages******/
const Home = lazy(() => import("../views/dashboards/Home.js"));
const CreateWebsite = lazy(() => import("../views/Website/CreateWebsite.js"));

// Auth Pages
const Landing = lazy(() => import("../views/Landing.js")); // Corrected path
const Login = lazy(() => import("../views/Auth/Login.js")); // Corrected path
const Register = lazy(() => import("../views/Auth/Register.js")); // Corrected path

// Form Elements
const Client = {
  AutoComplete: lazy(() => import("../views/Client/Profile.js")),
  Banking: lazy(() => import("../views/Client/Banking.js")),
  Checkbox: lazy(() => import("../views/Client/ExCheckbox.js")),
  Radio: lazy(() => import("../views/Client/ExRadio.js")),
  Slider: lazy(() => import("../views/Client/ExSlider.js")),
  Switch: lazy(() => import("../views/Client/ExSwitch.js")),
};

// Form Layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};
if (isAuthenticated()) {
  console.log("Người dùng đã đăng nhập.");
} else {
  console.log("Người dùng chưa đăng nhập.");
}

/*****Routes******/
const ThemeRoutes = [
  // Full Layout Routes
  {
    path: "/",
    element: isAuthenticated() ? <FullLayout /> : <Navigate to="/auth/login" />,
    children: [
      { path: "/", element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "profile", element: <Client.AutoComplete /> },
      { path: "create-website", element: <CreateWebsite /> },
      { path: "banking", element: <Client.Banking /> },
      { path: "form-elements/checkbox", element: <Client.Checkbox /> },
      { path: "form-elements/radio", element: <Client.Radio /> },
      { path: "form-elements/slider", element: <Client.Slider /> },
      { path: "form-elements/switch", element: <Client.Switch /> },
      { path: "form-layouts/form-layouts", element: <FormLayouts /> },
    ],
  },

  // Auth Layout Routes (Landing, Login, Register, Forgot Password)
  {
    path: "/auth",
    element: <AuthLayout />, // Sử dụng layout cho trang Auth
    children: [
      { path: "login", element: <Login /> }, // Trực tiếp gọi Login
      { path: "register", element: <Register /> }, // Trực tiếp gọi Register
    ],
  },
];

export default ThemeRoutes;
