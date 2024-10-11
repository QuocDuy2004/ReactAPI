import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const AuthLayout = lazy(() => import("../layouts/AuthLayout/AuthLayout.js"));

/*****Pages******/
const Home = lazy(() => import("../views/dashboards/Home.js"));
const CreateWebsite = lazy(() => import("../views/Website/CreateWebsite.js"));

// Auth Pages
const Login = lazy(() => import("../views/Auth/Login.js"));
const Register = lazy(() => import("../views/Auth/Register.js"));
const ForgotPassword = lazy(() => import("../views/Auth/ForgotPassword.js"));
const ResetPassword = lazy(() => import("../views/Auth/ResetPassword.js"));

// Client Pages
const Client = {
  AutoComplete: lazy(() => import("../views/Client/Profile.js")),
  Banking: lazy(() => import("../views/Client/Banking.js")),
  New: lazy(() => import("../views/Client/New.js")),
  Orders: lazy(() => import("../views/Client/Orders.js")),
  Api: lazy(() => import("../views/Client/Api.js")),
  Term: lazy(() => import("../views/Client/Term.js")),
  Radio: lazy(() => import("../views/Client/ExRadio.js")),
  Slider: lazy(() => import("../views/Client/ExSlider.js")),
  Switch: lazy(() => import("../views/Client/ExSwitch.js")),
};

// Form Layouts
const FormLayouts = lazy(() => import("../views/FormLayouts/FormLayouts.js"));

// Kiểm tra người dùng đã đăng nhập hay chưa
const isAuthenticated = () => {
  return localStorage.getItem("username") !== null;
};

// Route Guard Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth/login" />;
};

// Routes
const ThemeRoutes = [
  // Full Layout Routes (Authenticated users)
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <FullLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "profile", element: <Client.AutoComplete /> },
      { path: "create-website", element: <CreateWebsite /> },
      { path: "banking", element: <Client.Banking /> },
      { path: "new", element: <Client.New /> },
      { path: "orders", element: <Client.Orders /> },
      { path: "api", element: <Client.Api /> },
      { path: "term", element: <Client.Term /> },
      { path: "form-elements/radio", element: <Client.Radio /> },
      { path: "form-elements/slider", element: <Client.Slider /> },
      { path: "form-elements/switch", element: <Client.Switch /> },
      { path: "form-layouts/form-layouts", element: <FormLayouts /> },
    ],
  },

  // Auth Layout Routes (Unauthenticated users)
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: !isAuthenticated() ? <Login /> : <Navigate to="/home" /> },
      { path: "register", element: !isAuthenticated() ? <Register /> : <Navigate to="/home" /> },
      { path: "forgot-password", element: !isAuthenticated() ? <ForgotPassword /> : <Navigate to="/" /> },
      { path: "reset-password/:token", element: <ResetPassword /> }, // Không có điều kiện xác thực ở đây
    ],
  },
];

export default ThemeRoutes;
