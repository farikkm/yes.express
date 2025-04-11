import { Home, Search, Bell, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const links = [
  { path: "/", icon: <Home />, label: "Главная" },
  { path: "/search", icon: <Search />, label: "Поиск" },
  { path: "/notifications", icon: <Bell />, label: "Уведомления" },
  { path: "/busket", icon: <ShoppingCart />, label: "Корзина" },
  { path: "/user/dashboard/profile", icon: <User />, label: "Профиль" },
]

function NavigationBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md flex justify-around items-center h-16 z-50">
      {links.map((link, index) => (
        <NavItem key={index} path={link.path} icon={link.icon} label={link.label}/>
      ))}
    </nav>
  );
}

function NavItem({ icon, label, path }: NavItemProps) {
  return (
    <NavLink to={path} className="">
      {({ isActive }) => (
        <div className={`flex flex-col items-center text-xs text-gray-600 hover:text-blue-500 transition rounded-2xl p-2 ${isActive ? "bg-green-500" : ""}`}>
          <div className={`w-6 h-6 ${isActive ? "text-white" : ""}`}>{icon}</div>
          <span className={`${isActive ? "text-white" : ""}`}>{label}</span>
        </div>
      )}
    </NavLink>
  );
}

export default NavigationBar;
