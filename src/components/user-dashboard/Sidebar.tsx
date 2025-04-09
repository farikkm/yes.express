import { Link, NavLink } from "react-router-dom";
import { ArrowLeft, Bell, CircleHelp, MapPinHouse, Package, User, Wallet } from "lucide-react";

const Sidebar = () => {
  const pages = [
    {
      name: "Профиль",
      path: "profile",
      icon: <User className="w-5 h-5 mr-2" />,
    },
    {
      name: "Заказы",
      path: "orders",
      icon: <Package className="w-5 h-5 mr-2" />,
    },
    {
      name: "Адреса",
      path: "addresses",
      icon: <MapPinHouse className="w-5 h-5 mr-2" />,
    },
    {
      name: "Методы оплаты",
      path: "payment-methods",
      icon: <Wallet className="w-5 h-5 mr-2"/>,
    },
    {
      name: "Уведомления",
      path: "notifications",
      icon: <Bell className="w-5 h-5 mr-2"/>,
    },
    {
      name: "Помощь",
      path: "help",
      icon: <CircleHelp className="w-5 h-5 mr-2"/>,
    },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r p-4">
      <Link className="inline-block mb-4" to={"/"}>
        <ArrowLeft
          size={40}
          className="cursor-pointer rounded-full px-1 py-1.5 bg-gray-200 hover:bg-gray-300 transition-all duration-200"
        />
      </Link>
      <nav className="space-y-2">
        {pages.map((page, index) => (
          <NavLink
            key={index}
            to={page.path}
            className={({ isActive }) =>
              `flex items-center p-2 rounded hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold" : ""
              }`
            }
          >
            <span>{page.icon}</span>
            <span>{page.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
