import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { baseTheme } from './assets/global/Theme-variable';
import Themeroutes from "./routes/Router";

const App = () => {
  // Sử dụng useRoutes để xử lý các route trong ứng dụng
  const routing = useRoutes(Themeroutes);

  // Khởi tạo theme cho Material-UI
  const theme = baseTheme;

  return (
    <ThemeProvider theme={theme}>
      {routing}
    </ThemeProvider>
  );
};

export default App;
