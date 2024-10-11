import React, { useEffect } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from './assets/global/Theme-variable';
import Themeroutes from "./routes/Router";
import axios from 'axios'; 


const App = () => {
  // Sử dụng useRoutes để xử lý các route trong ứng dụng
  const routing = useRoutes(Themeroutes);

  // Khởi tạo theme cho Material-UI
  const theme = baseTheme;
  useEffect(() => {
    // Thiết lập CSRF Token cho Axios
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    if (csrfToken) {
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
};

export default App;
