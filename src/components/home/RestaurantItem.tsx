import foodImg from "@/assets/images/food.jpg";
import { CarFront, Star } from "lucide-react";
import { Link } from "react-router-dom";

const IMG_HEIGHT = 200;

const RestaurantItem = () => {
  return (
    <div className="w-full">
      <Link to={"/restaurant/kfc"}>
        <div className="flex flex-col gap-2">
          <div
            style={{ height: IMG_HEIGHT }}
            className="food-img-wrapper group"
          >
            <img
              src={foodImg}
              className="absolute object-cover h-full w-full"
              alt="food-jpg"
            />
            <div className="food-img-overlay" />
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
              <button className="food-badge">Free Delivery</button>
              <button className="food-badge">You ordered</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantItem;
