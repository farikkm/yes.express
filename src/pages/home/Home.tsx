import { Search } from "lucide-react";

import AddressDropDown from "@/components/home/header/AddressDropdown";
import NotificatonDropdown from "@/components/home/header/NotificatonDropdown";
import LanguageDropdown from "@/components/home/header/LanguageDropdown";
import BusketDropdown from "@/components/home/header/BusketDropdown";
import ProfileDropdown from "@/components/home/header/ProfileDropdown";

const Home = () => {
  return (
    <>
      <header className="flex items-center gap-3 px-5 py-3 w-full border-b border-b-gray-800">
        <div className="flex items-center gap-5 grow">
          <img width={70} height={70} src="/icons/logo.png" alt="header-logo" />
          <div className="ml-5 border-2 border-green-600 rounded-2xl grow shrink basis-[430px] max-w-[430px] overflow-hidden">
            <form className="flex w-full" action="#">
              <div className="flex items-center gap-3 p-3 w-full">
                <Search color="green" />
                <input
                  className="focus:outline-none w-full h-full truncate placeholder:opacity-100 focus:placeholder:opacity-0"
                  type="text"
                  placeholder="Search for restaurants, food and products"
                />
              </div>

              <button className="px-5 bg-green-600 text-white opacity-90 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                Search
              </button>
            </form>
          </div>

          <AddressDropDown />
        </div>
        <div className="flex items-center 2xl:gap-8 gap-5 flex-none">
          <NotificatonDropdown />
          <LanguageDropdown />
          <BusketDropdown />
          <ProfileDropdown />
        </div>
      </header>
      <aside></aside>
      <div className="dashboard"></div>
    </>
  );
};

export default Home;
