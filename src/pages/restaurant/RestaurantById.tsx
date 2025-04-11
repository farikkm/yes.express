import Header from "@/components/header/desktop/Header";
import { ArrowLeft, Info, Plus, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import restaurantBg from "@/assets/images/restaurant-bg.jpg";
import foodImg from "@/assets/images/food-2.jpeg";
import RestaurantBadge from "@/components/restaurant/RestaurantBadge";

const categories = [
  "What's new",
  "You ordered",
  "Акции",
  "Сеты",
  "Бургеры",
  "Твистеры",
  "Баскеты",
  "Курица",
  "Салаты",
  "Ланчбоксы",
  "Картофель и снэки",
];

const RestaurantById = () => {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <div className="container mx-auto px-5 pt-30 flex gap-10">
        <aside className="w-55 relative">
          <div className="fixed w-55">
            <Link
              className="mb-4 bg-gray-200 hover:bg-gray-300 transition-all duration-200 px-2 py-4 w-full inline-flex items-center gap-2 rounded-2xl"
              to={"/"}
            >
              <ArrowLeft size={20} className="cursor-pointer rounded-full" />
              <span className="font-medium">All restaurants</span>
            </Link>

            <nav className="mt-8">
              <h3 className="font-medium text-2xl">Menu</h3>
              <ul className="list-none mt-2 space-y-2 select-none">
                <li className="font-medium bg-white transition-all duration-200 px-2 py-4 w-full inline-flex items-center gap-2 rounded-2xl">
                  Chicken
                </li>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="bg-transparent hover:bg-white transition-all duration-200 px-2 py-4 w-full inline-flex items-center gap-2 rounded-2xl"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="grow">
          <div className="relative group h-[380px] w-full rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={restaurantBg}
              alt="restaurant-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
            <div className="absolute top-[50%] left-10">
              <h2 className="text-6xl font-bold text-white">KFC</h2>
              <div className="mt-6 flex items-center gap-2">
                <RestaurantBadge icon={Truck} iconSize={25} title="15-25" subtitle="min" />
                <RestaurantBadge icon={Star} iconSize={25} title="4.7" subtitle="500+"/>
                <div className="flex items-center gap-2 bg-gray-200 opacity-90 px-5 py-2 rounded-2xl">
                  <Info size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-5 mb-10">
            <div>
              <h2 className="text-4xl font-bold">Chicken</h2>

              <div className="mt-4 grid grid-cols-[repeat(3,1fr)] gap-y-[16px] gap-x-[16px] laptop-l:grid-cols-[repeat(4,1fr)]">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="p-4 bg-white w-full rounded-2xl">
                    <img src={foodImg} alt="food-img" />
                    <div className="space-y-1 mt-2">
                      <h4 className="text-3xl font-medium">55 000 sum</h4>
                      <span>Шефбургер Комбо</span>
                      <span className="text-gray-500 block mt-4 font-medium">
                        760g
                      </span>
                      <button className="mt-4 flex items-center justify-center py-3 rounded-2xl gap-1 w-full bg-gray-200">
                        <Plus />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold">What's new</h2>
              <div className="mt-4 grid grid-cols-[repeat(3,1fr)] gap-y-[16px] gap-x-[16px] laptop-l:grid-cols-[repeat(4,1fr)]">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="p-4 bg-white w-full rounded-2xl">
                    <img src={foodImg} alt="food-img" />
                    <div className="space-y-1 mt-2">
                      <h4 className="text-3xl font-medium">55 000 sum</h4>
                      <span>Шефбургер Комбо</span>
                      <span className="text-gray-500 block mt-4 font-medium">
                        760g
                      </span>
                      <button className="mt-4 flex items-center justify-center py-3 rounded-2xl gap-1 w-full bg-gray-200">
                        <Plus />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold">Акции</h2>
              <div className="mt-4 grid grid-cols-[repeat(3,1fr)] gap-y-[16px] gap-x-[16px] laptop-l:grid-cols-[repeat(4,1fr)]">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="p-4 bg-white w-full rounded-2xl">
                    <img src={foodImg} alt="food-img" />
                    <div className="space-y-1 mt-2">
                      <h4 className="text-3xl font-medium">55 000 sum</h4>
                      <span>Шефбургер Комбо</span>
                      <span className="text-gray-500 block mt-4 font-medium">
                        760g
                      </span>
                      <button className="mt-4 flex items-center justify-center py-3 rounded-2xl gap-1 w-full bg-gray-200">
                        <Plus />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <aside></aside>
      </div>
    </div>
  );
};

export default RestaurantById;
