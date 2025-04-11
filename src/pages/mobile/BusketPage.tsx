import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileLayout from "@/layout/mobile/MobileLayout";

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
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <MobileLayout title="Корзина">
      <div className="min-h-screen p-4 bg-gray-50">
        {cart.length === 0 ? (
          <p className="text-muted-foreground">Корзина пуста</p>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
                >
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.price} ₸</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2"
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center px-2 mb-4">
              <span className="text-lg font-medium">Итого:</span>
              <span className="text-lg font-semibold">{total} ₸</span>
            </div>

            <Button className="w-full text-white text-base font-medium">
              Оформить заказ
            </Button>
          </>
        )}
      </div>
    </MobileLayout>
  );
}
