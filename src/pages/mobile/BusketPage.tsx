import { useState } from "react";
import { Dot, EllipsisVertical, Minus, Plus, Truck } from "lucide-react";
import MobileLayout from "@/layout/mobile/MobileLayout";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import foodImg from "@/assets/images/food.png";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const initialCart: CartItem[] = [
  { id: 1, name: "Пицца Маргарита", price: 2500, quantity: 1 },
  { id: 2, name: "Бургер с курицей", price: 1800, quantity: 2 },
];

export default function BusketPage() {
  const [cart] = useState<CartItem[]>(initialCart);

  const orders = [
    {
      img: foodImg,
      name: "Большой лаваш острый с говядиной",
      price: "37,000 sum",
      weight: "365 г",
      quantity: 1,
    },
    {
      img: foodImg,
      name: "Большой лаваш острый с говядиной",
      price: "37,000 sum",
      weight: "365 г",
      quantity: 1,
    },
    {
      img: foodImg,
      name: "Большой лаваш острый с говядиной",
      price: "37,000 sum",
      weight: "365 г",
      quantity: 1,
    },
  ];

  return (
    <MobileLayout title="Корзина">
      <div className="min-h-screen">
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Корзина пуста</p>
        ) : (
          <>
            <div className="p-2 rounded-3xl">
              <div className="w-full px-2 py-3">
                <div className="flex items-center gap-3 justify-between">
                  <h3 className="text-2xl">Busket</h3>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <EllipsisVertical
                        size={40}
                        className="cursor-pointer rounded-2xl px-1 py-1.5 hover:bg-gray-100 transition-all duration-200"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <span className="text-lg px-2">Удалить все</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="px-2 py-4 space-y-2">
                {orders.map((order, index) => (
                  <div
                    className="flex gap-5 items-center not-last:border-b not-last:border-b-gray-200 pb-1"
                    key={index}
                  >
                    <img src={foodImg} width={40} height={40} alt="food-img" />
                    <div className="flex flex-col items-start gap-0.5 space-y-1 grow select-none">
                      <h5 className="text-lg/tight max-w-[200px] font-medium">
                        {order.name}
                      </h5>
                      <div className="text-gray-400 text-sm flex items-center">
                        <span className="font-bold text-black">
                          {order.price}
                        </span>
                        <Dot />
                        <span>{order.weight}</span>
                      </div>
                    </div>
                    <div className="flex items-center bg-gray-200 p-1 rounded-2xl gap-2">
                      <Plus className="p-1 rounded-2xl hover:bg-gray-300" />
                      <span className="text-black font-bold text-lg">
                        {order.quantity}
                      </span>
                      <Minus className="p-1 rounded-2xl hover:bg-gray-300" />
                    </div>
                  </div>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <div className="flex items-center justify-between my-2">
                <h4>Service fee</h4>
                <span className="text-xl text-black font-bold">5,000 sum</span>
              </div>
              <DropdownMenuSeparator />
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center gap-2">
                  <Truck size={40} className="bg-gray-200 p-1.5 rounded-2xl" />
                  <h4>Delivery</h4>
                </div>

                <span className="text-xl text-black font-bold">15,000 sum</span>
              </div>
              <button className="mt-4 flex items-center justify-between w-full p-3 bg-green-400 rounded-3xl">
                <span className="font-medium">Next</span>
                <span className="text-2xl text-black font-bold">
                  55,000 sum
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </MobileLayout>
  );
}
