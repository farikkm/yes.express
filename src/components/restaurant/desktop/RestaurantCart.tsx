import foodImg from "@/assets/images/food-2.jpeg";
import { Minus, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RestaurantCart = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-2 2xl:p-4">
      <Dialog>
        <DialogTrigger className="w-full">
          <div className="flex flex-col items-center">
            <img src={foodImg} alt="food-img" />
            <div className="space-y-1 mt-2 w-full *:text-left">
              <h4 className="text-3xl font-medium ">55 000 sum</h4>
              <span className="block">Шефбургер Комбо</span>
              <span className="text-gray-500 block mt-4 font-medium">760g</span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="product-cart-wrapper">
          <div className="w-[40%] shrink-0">
            <img
              className="w-full h-full"
              src={foodImg}
              alt="product-cart-img"
            />
          </div>
          <DialogHeader>
            <DialogTitle className="text-5xl">Шефбургер Комбо</DialogTitle>
            <DialogDescription className="text-3xl">
              55 000 sum
            </DialogDescription>
            <div className="space-y-4">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <span className="text-gray-500 block mt-4 font-medium">760g</span>
              <div className="flex items-center bg-gray-200 p-1 rounded-2xl gap-2 w-fit">
                <Minus className="p-1 rounded-2xl hover:bg-gray-300" />
                <span className="text-black font-bold text-lg">1</span>
                <Plus className="p-1 rounded-2xl hover:bg-gray-300" />
              </div>
              <div className="restaurant-cart-button max-w-[300px] select-none">
                <Plus />
                <span>Add</span>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className="restaurant-cart-button select-none">
        <Plus />
        <span>Add</span>
      </div>
    </div>
  );
};

export default RestaurantCart;
