import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Divider,
  ListItemIcon,
  Tooltip,
  Typography,
} from "@mui/material";
import userimg from "../../../assets/images/users/user.jpg";
import toastr from "toastr"; // Import Toastr for notifications
import "toastr/build/toastr.min.css"; // Import Toastr styles

const Header = (props) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl4, setAnchorEl4] = useState(null);
  const [username, setUsername] = useState("");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleCloseLanguageMenu();
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      navigate("/auth/login");
    }
  }, [navigate]);

  const handleClose = () => setAnchorEl(null);
  const handleClose4 = () => setAnchorEl4(null);

  const handleLogout = () => {
    localStorage.removeItem("username");
    toastr.success("Đăng xuất thành công!"); // Display success notification
    setTimeout(() => {
      navigate("/auth/login"); // Redirect to login page after 2 seconds
    }, 2000);
  };

  const [anchorElLang, setAnchorElLang] = useState(null);
  const handleLanguageMenuOpen = (event) => setAnchorElLang(event.currentTarget);
  const handleCloseLanguageMenu = () => setAnchorElLang(null);

  return (
    <AppBar
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      elevation={0}
      className={props.customClass}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{ display: { lg: "none", xs: "inline" } }}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Box flexGrow={1} />

        <IconButton
          title="Thông báo"
          aria-label="notification-menu"
          color="inherit"
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{ "& .MuiMenu-paper": { width: "250px", right: 0, top: "70px !important" } }}
        >
          <MenuItem onClick={handleClose}>
            <Box display="flex" alignItems="center">
              <NotificationsNoneOutlinedIcon fontSize="small" sx={{ mr: 2 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Thông báo 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Đây là nội dung của thông báo thứ nhất.
                </Typography>
              </Box>
            </Box>
          </MenuItem>
        </Menu>

        <Box
          sx={{ width: "1px", backgroundColor: "rgba(0,0,0,0.1)", height: "25px", ml: 1 }}
        ></Box>

        <Tooltip title="Thay đổi ngôn ngữ" arrow>
          <IconButton
            color="inherit"
            onClick={handleLanguageMenuOpen}
            aria-label="language-menu"
          >
            <LanguageOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={anchorElLang}
          keepMounted
          open={Boolean(anchorElLang)}
          onClose={handleCloseLanguageMenu}
          sx={{ "& .MuiMenu-paper": { width: "150px" } }}
        >
          <MenuItem onClick={() => changeLanguage("vi")}>Tiếng Việt</MenuItem>
          <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        </Menu>

        <Tooltip title="Tài khoản" arrow>
          <Button
            aria-label="profile-menu"
            color="inherit"
            onClick={(event) => setAnchorEl4(event.currentTarget)}
          >
            <Avatar src={userimg} alt="User" sx={{ width: "30px", height: "30px" }} />
            <Typography sx={{ ml: 1 }}>{username}</Typography>
          </Button>
        </Tooltip>
        <Menu
          anchorEl={anchorEl4}
          keepMounted
          open={Boolean(anchorEl4)}
          onClose={handleClose4}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          sx={{ "& .MuiMenu-paper": { width: "250px", right: 0, top: "70px !important" } }}
        >
          <MenuItem onClick={handleClose4}>
            <Avatar sx={{ width: "35px", height: "35px" }} />
            <Box sx={{ ml: 2 }}>{username}</Box>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => { handleClose4(); navigate("/profile"); }}>
            <ListItemIcon>
              <PersonAddOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Trang cá nhân
          </MenuItem>
          <MenuItem onClick={() => { handleClose4(); navigate("/settings"); }}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Cài đặt
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            Đăng xuất
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
