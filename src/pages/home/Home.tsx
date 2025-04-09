import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";

import "keen-slider/keen-slider.min.css";
import FilterPanel from "@/components/home/FilterPanel";
import RestaurantItem from "@/components/home/RestaurantItem";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mt-4">
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

export default Home;
