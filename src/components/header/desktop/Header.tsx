import AddressDropDown from "./components/AddressDropdown";
import NotificatonDropdown from "./components/NotificatonDropdown";
import LanguageDropdown from "./components/LanguageDropdown";
import BusketDropdown from "./components/BusketDropdown";
import ProfileDropdown from "./components/ProfileDropdown";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchForRestaurants from "./components/SearchForRestaurants";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-wrapper ${isScrolled && "shadow-md! outline-none!"}`}>
      <div className="flex items-center gap-5 grow">
        <Link className="shrink-0" to={"/"}>
          <img width={70} height={70} src="/icons/logo.png" alt="header-logo" />
        </Link>

        <SearchForRestaurants />
        <AddressDropDown />
      </div>
      <div className="flex items-center 2xl:gap-8 gap-5 flex-none">
        <NotificatonDropdown />
        <LanguageDropdown />
        <BusketDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
