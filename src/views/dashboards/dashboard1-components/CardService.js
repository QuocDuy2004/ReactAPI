import React from "react";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const BlogCard = () => {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        width: '100%', // Đặt chiều rộng là 100%
        boxShadow: 3,
        borderRadius: '8px',
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
        },
        margin: '20px 0' // Thêm khoảng cách bên trên và bên dưới
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          Danh sách dịch vụ
        </Typography>
        <Grid container spacing={1} sx={{ marginTop: 2 }}>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              startIcon={<ThumbUpIcon />} 
              fullWidth
              sx={{ borderRadius: '20px' }} // Thêm góc bo tròn cho nút
            >
              Like
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              startIcon={<CommentIcon />} 
              fullWidth
              sx={{ borderRadius: '20px' }} // Thêm góc bo tròn cho nút
            >
              Comment
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              startIcon={<NotificationsActiveIcon />} 
              fullWidth
              sx={{ borderRadius: '20px' }} // Thêm góc bo tròn cho nút
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
