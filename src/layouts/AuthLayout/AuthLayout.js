import React from "react";
import { experimentalStyled, Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

// Thêm backgroundImage vào AuthWrapper
const AuthWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  backgroundImage: "url('/assets/images/backgound_log.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed", 
}));

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Container maxWidth="sm" sx={{ textAlign: "center" }}>
        <Box>
          <Outlet />
        </Box>
      </Container>
    </AuthWrapper>
  );
};

export default AuthLayout;
