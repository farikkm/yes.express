import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import foodImg from "@/assets/images/food-2.jpeg";
import { Minus, Plus } from "lucide-react";
import { ExpandableText } from "@/components/ui/expandable-text";

const RestaurantCartMobile = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-2 2xl:p-4">
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center">
            <img src={foodImg} alt="food-img" />
            <div className="space-y-1 mt-2 w-full *:text-left">
              <h4 className="text-3xl font-medium ">55 000 sum</h4>
              <span className="block">Шефбургер Комбо</span>
              <span className="text-gray-500 block mt-4 font-medium">760g</span>
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-[75vh]">
          <div className="flex flex-col gap-6 p-4 overflow-y-scroll">
            <DrawerHeader className="p-0">
              <div className="w-[40%] shrink-0">
                <img
                  className="w-full h-full"
                  src={foodImg}
                  alt="product-cart-img"
                />
              </div>
              <DrawerTitle className="text-5xl">Шефбургер Комбо</DrawerTitle>
              <DrawerDescription className="text-3xl">
                55 000 sum
              </DrawerDescription>
            </DrawerHeader>
            <div className="space-y-4">
              <ExpandableText>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </ExpandableText>
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
          </div>
        </DrawerContent>
      </Drawer>
      <div className="restaurant-cart-button select-none">
        <Plus />
        <span>Add</span>
      </div>
    </div>
  );
};

export default RestaurantCartMobile;
