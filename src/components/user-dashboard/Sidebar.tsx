import { Link, NavLink } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  CircleHelp,
  MapPinHouse,
  Package,
  User,
  Wallet,
} from "lucide-react";

const Sidebar = () => {
  const pages = [
    {
      name: "Профиль",
      path: "profile",
      icon: <User className="sidebar-menu-item-icon" />,
    },
    {
      name: "Заказы",
      path: "orders",
      icon: <Package className="sidebar-menu-item-icon" />,
    },
    {
      name: "Адреса",
      path: "addresses",
      icon: <MapPinHouse className="sidebar-menu-item-icon" />,
    },
    {
      name: "Методы оплаты",
      path: "payment-methods",
      icon: <Wallet className="sidebar-menu-item-icon" />,
    },
    {
      name: "Уведомления",
      path: "notifications",
      icon: <Bell className="sidebar-menu-item-icon" />,
    },
    {
      name: "Помощь",
      path: "help",
      icon: <CircleHelp className="sidebar-menu-item-icon" />,
    },
  ];

  return (
    <aside className="sidebar-wrapper">
      <Link className="md:inline-block hidden mb-4" to={"/"}>
        <ArrowLeft size={40} className="arrow-left" />
      </Link>
      <nav className="sidebar-menu">
        <Link className="inline-block md:hidden" to={"/"}>
          <ArrowLeft size={40} className="arrow-left" />
        </Link>
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.path}
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? "bg-gray-200 font-semibold" : ""}`
            }
          >
            <span>{page.icon}</span>
            <span className="md:inline-block hidden">{page.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
