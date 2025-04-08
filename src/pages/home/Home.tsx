import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";

import "keen-slider/keen-slider.min.css";
import foodImg from "@/assets/images/food.jpg";
import { CarFront, Star } from "lucide-react";
import FilterPanel from "@/components/home/FilterPanel";

const IMG_HEIGHT = 200;

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
          <div className="mt-10 space-y-4">
            <h2 className="text-3xl font-bold">Рестораны</h2>
            <div className="flex gap-4 flex-wrap *:grow">
              {[...Array(16)].map((_, index) => (
                <div key={index} className="w-[23.5%] h-[23.5%]">
                  <div className="flex flex-col gap-2">
                    <div
                      style={{ height: IMG_HEIGHT }}
                      className="relative flex items-center justify-center overflow-hidden rounded-3xl group"
                    >
                      <img
                        src={foodImg}
                        className="absolute object-cover h-full w-full"
                        alt="food-jpg"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/6" />
                    </div>
                    <div className="px-2 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h5 className="font-medium">KFC</h5>
                        <div className="flex items-center gap-2">
                          <Star size={16} fill="black" />
                          <span className="text-sm">4.7</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <CarFront size={20} />
                        <span className="text-sm">15 - 25 min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="cursor-pointer px-2 py-1 bg-gray-200 rounded-3xl text-sm font-medium">
                          Free Delivery
                        </button>
                        <button className="cursor-pointer px-2 py-1 bg-gray-200 rounded-3xl text-sm font-medium">
                          You ordered
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
