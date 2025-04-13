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
        <div className="container mx-auto px-8 space-y-4">
          <h2 className="home-title">Вы заказывали: </h2>
          <Slider />
          <FilterPanel />
          <h2 className="home-title">Предложения: </h2>
          <Slider />
          <div className="my-10 space-y-4">
            <h2 className="home-title">Рестораны</h2>
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
        <h2 className="home-title">Вы заказывали: </h2>
        <SliderMobile />
      </div>
      <div className="px-8">
        <FilterPanel />
      </div>
      <div className="mt-6 pl-8 space-y-2">
        <h2 className="home-title">Акции: </h2>
        <SliderMobile />
      </div>
      <div className="mt-6 pl-8 space-y-2">
        <h2 className="home-title">Скидки: </h2>
        <SliderMobile />
      </div>

      <div></div>
    </div>
  );
};

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 1100 });

  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default Home;
