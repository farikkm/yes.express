import { Bell, Globe, MapPinned, Search, ShoppingBasket, UserPen } from "lucide-react";

const Home = () => {
  return (
    <>
      <header className="flex items-center justify-between p-5 w-full border-b border-b-gray-800">
        <div className="flex items-center justify-between gap-5">
          <img width={70} height={70} src="/icons/logo.png" alt="header-logo" />
          <div className="ml-5 border-2 border-green-600 rounded-2xl overflow-hidden">
            <form className="flex w-[430px]" action="#">
              <div className="flex items-center gap-3 p-3 w-full">
                <Search color="green" />
                <input
                  className="focus:outline-none w-full truncate placeholder:opacity-100 focus:placeholder:opacity-0"
                  type="text"
                  placeholder="Search for restaurants, food and products"
                />
              </div>

              <button className="px-5 bg-green-600 text-white opacity-90 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                Search
              </button>
            </form>
          </div>
          <button className="flex gap-2 items-center p-3 bg-green-600 opacity-90 hover:opacity-100 transition-opacity duration-200 rounded-2xl border-2 border-green-600">
            <MapPinned color="white" />
            <span className="text-white">Enter delivery address</span>
          </button>
        </div>
        <div className="flex items-center gap-10">
          <button className="flex flex-col items-center gap-0.5 cursor-pointer">
            <Bell />
            <span>Notifications</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 cursor-pointer">
            <Globe />
            <span>Language</span>
          </button>
          <button className="flex gap-2 items-center p-3 bg-green-600 opacity-90 hover:opacity-100 transition-opacity duration-200 rounded-2xl border-2 border-green-600">
            <ShoppingBasket color="white" />
            <span className="text-white font-bold">30,000 sum</span>
          </button>
          <div className="bg-green-600 rounded-full p-2 cursor-pointer">
            <UserPen color="white" height={40} width={40}/>
          </div>
        </div>
      </header>
      <aside></aside>
      <div className="dashboard"></div>
    </>
  );
};

export default Home;
