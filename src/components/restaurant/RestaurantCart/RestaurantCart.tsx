import foodImg from "@/assets/images/food-2.jpeg";
import { Plus } from "lucide-react";

const RestaurantCart = () => {
  return (
    <div className="p-4 bg-white w-full rounded-2xl">
      <img src={foodImg} alt="food-img" />
      <div className="space-y-1 mt-2">
        <h4 className="text-3xl font-medium">55 000 sum</h4>
        <span>Шефбургер Комбо</span>
        <span className="text-gray-500 block mt-4 font-medium">760g</span>
        <button className="mt-4 flex items-center justify-center py-3 rounded-2xl gap-1 w-full bg-gray-200">
          <Plus />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
};

export default RestaurantCart;
