import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";

export const sidebarData = [
      {
        title: "Users",
        path: "/agrocery/users",
        icon: <BiIcons.BiUser />,
      },
      {
        title: "Products",
        path: "/agrocery/products" ,
        icon: <RiIcons.RiShoppingBasket2Line />,
      },
      {
        title: "Orders",
        path: "/agrocery/orders/" ,
        icon: <RiIcons.RiTruckLine />,
      },
      {
        title: "Banners",
        path: "/agrocery/banners/" ,
        icon: <GiIcons.GiVerticalBanner />,
      },
];
