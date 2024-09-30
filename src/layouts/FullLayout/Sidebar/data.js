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
    href: "/Profile",
  },
  {
    title: "Website riêng",
    icon: AddToPhotosOutlinedIcon,
    href: "/create-website",
  },
  {
    title: "Nạp tiền",
    icon: AspectRatioOutlinedIcon,
    href: "/banking",
  },
  {
    title: "Checkbox",
    icon: AssignmentTurnedInOutlinedIcon,
    href: "/form-elements/checkbox",
  },
  {
    title: "Radio",
    icon: AlbumOutlinedIcon,
    href: "/form-elements/radio",
  },
  {
    title: "Slider",
    icon: SwitchCameraOutlinedIcon,
    href: "/form-elements/slider",
  },
  {
    title: "Switch",
    icon: SwitchLeftOutlinedIcon,
    href: "/form-elements/switch",
  },
  {
    title: "Form",
    icon: DescriptionOutlinedIcon,
    href: "/form-layouts/form-layouts",
  },
  {
    title: "Table",
    icon: AutoAwesomeMosaicOutlinedIcon,
    href: "/tables/basic-table",
  },
];

export default Menuitems;
