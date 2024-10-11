import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import SwitchCameraOutlinedIcon from '@mui/icons-material/SwitchCameraOutlined';
import SwitchLeftOutlinedIcon from '@mui/icons-material/SwitchLeftOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';

const Menuitems = [
  {
    title: "Trang chủ",
    icon: DashboardOutlinedIcon,
    href: "/home",
  },
  {
    title: "Thông tin",
    icon: AddToPhotosOutlinedIcon,
    href: "/profile",
  },
  // {
  //   title: "Website riêng",
  //   icon: AddToPhotosOutlinedIcon,
  //   href: "/create-website",
  // },
  {
    title: "Nạp tiền",
    icon: AspectRatioOutlinedIcon,
    href: "/banking",
  },
  {
    title: "Đơn hàng mới",
    icon: DescriptionOutlinedIcon,
    href: "/new",
  },
  {
    title: "Đơn hàng đã mua",
    icon: AddToPhotosOutlinedIcon,
    href: "/orders",
  },
  {
    title: "Tài liệu API",
    icon: AssignmentTurnedInOutlinedIcon,
    href: "/api",
  },
  {
    title: "Điều khoản dịch vụ",
    icon: AlbumOutlinedIcon,
    href: "/term",
  },
  {
    title: "Liên hệ Telegram",
    icon: SwitchCameraOutlinedIcon,
    href: "https://t.me/quocduy20",
  },
  {
    title: "Liên hệ Facebook",
    icon: SwitchLeftOutlinedIcon,
    href: "https://facebook.com/QuocDuy2004",
  },
];

export default Menuitems;
