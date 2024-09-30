import React from "react";
import { experimentalStyled, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
}));

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Box
          sx={{
            backgroundColor: "#ffffff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Outlet sẽ render các trang Login, Register dựa trên route */}
          <Outlet />
        </Box>
      </Container>
    </AuthWrapper>
  );
};

export default AuthLayout;
