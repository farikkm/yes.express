import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

type Order = {
  id: string;
  status: "Ожидается" | "В пути" | "Доставлен";
  address: string;
  createdAt: Date;
  total: number;
};

const mockOrders: Order[] = [
  {
    id: "ORD-001",
    status: "Доставлен",
    address: "г. Ташкент, ул. Навои, 23",
    createdAt: new Date("2025-04-01T14:23:00"),
    total: 45000,
  },
  {
    id: "ORD-002",
    status: "В пути",
    address: "г. Ташкент, ул. Шота Руставели, 99",
    createdAt: new Date("2025-04-08T09:10:00"),
    total: 32000,
  },
  {
    id: "ORD-003",
    status: "Ожидается",
    address: "г. Ташкент, ул. Буюк Ипак Йули, 12",
    createdAt: new Date("2025-04-09T10:05:00"),
    total: 28000,
  },
  {
    id: "ORD-004",
    status: "Ожидается",
    address: "г. Ташкент, ул. Буюк Ипак Йули, 12",
    createdAt: new Date("2025-04-09T10:05:00"),
    total: 28000,
  },
  {
    id: "ORD-005",
    status: "Ожидается",
    address: "г. Ташкент, ул. Буюк Ипак Йули, 12",
    createdAt: new Date("2025-04-09T10:05:00"),
    total: 28000,
  },
];

const getStatusColor = (status: Order["status"]) => {
  switch (status) {
    case "Доставлен":
      return "bg-green-100 text-green-800";
    case "В пути":
      return "bg-yellow-100 text-yellow-800";
    case "Ожидается":
      return "bg-gray-100 text-gray-800";
    default:
      return "";
  }
};

const Orders = () => {
  const [orders] = useState(mockOrders);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">📦 Мои заказы</h2>

      <div className="pb-4 space-y-4">
        {orders.map(order => (
          <Card key={order.id}>
            <CardContent className="p-4 space-y-1">
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium">{order.id}</div>
                <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
              </div>
              <div className="text-sm text-gray-600">Адрес: {order.address}</div>
              <div className="text-sm text-gray-600">
                Дата заказа: {format(order.createdAt, "dd.MM.yyyy HH:mm")}
              </div>
              <div className="text-sm text-gray-800 font-medium">
                Сумма: {order.total.toLocaleString()} сум
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Orders;
