import Header from "@/components/header/desktop/Header";
import Slider from "@/components/slider/Slider";

import "keen-slider/keen-slider.min.css";
import FilterPanel from "@/components/home/FilterPanel";
import RestaurantItem from "@/components/home/RestaurantItem";
import NavigationBar from "@/components/header/mobile/NavigationBar";

import { useMediaQuery } from "react-responsive";
import AddressDropDown from "@/components/header/desktop/components/AddressDropdown";
import SliderMobile from "@/components/slider/SliderMobile";

const HomeDesktop = () => {
  return (
    <>
      <Header />
      <main className="mt-30">
        <div className="container mx-auto px-5 space-y-4">
          <h2 className="text-3xl font-bold">Вы заказывали: </h2>
          <Slider />
          <FilterPanel />
          <h2 className="text-3xl font-bold">Предложения: </h2>
          <Slider />
          <div className="my-10 space-y-4">
            <h2 className="text-3xl font-bold">Рестораны</h2>
            <div className="home-restaurants">
              {[...Array(16)].map((_, index) => (
                <RestaurantItem key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const HomeMobile = () => {
  return (
    <div className="relative mt-5 mb-20">
      <NavigationBar />
      <div className="flex justify-center">
        <AddressDropDown />
      </div>
      <div className="mt-6 pl-8 space-y-2">
        <h2 className="text-3xl font-bold">Вы заказывали: </h2>
        <SliderMobile />
      </div>
      <div className="mt-6 pl-8 space-y-2">
        <h2 className="text-3xl font-bold">Акции: </h2>
        <SliderMobile />
      </div>
      <div className="mt-6 pl-8 space-y-2">
        <h2 className="text-3xl font-bold">Скидки: </h2>
        <SliderMobile />
      </div>
      
      <div></div>
    </div>
  );
};

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default Home;
