import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/header/mobile/NavigationBar";
import MobileLayout from "@/layout/mobile/MobileLayout";

const mockNotifications = [
  { id: 1, message: "Ваш заказ принят", read: false },
  { id: 2, message: "Ваш заказ в пути", read: false },
  { id: 3, message: "Заказ доставлен", read: true },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [loading] = useState(false);

  const markAsRead = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <MobileLayout title="Notifications">
      <NavigationBar />
      <div className="min-h-screen p-4">

        {loading ? (
          <p className="text-muted-foreground">Загрузка...</p>
        ) : notifications.length === 0 ? (
          <p className="text-muted-foreground">Нет новых уведомлений</p>
        ) : (
          <ul className="space-y-3">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`flex items-center gap-3 p-4 rounded-xl shadow-sm transition ${
                  notification.read ? "bg-gray-200" : "bg-white"
                }`}
              >
                <Bell
                  className={`w-5 h-5 ${
                    notification.read ? "text-gray-500" : "text-blue-500"
                  }`}
                />
                <span
                  className={`flex-1 text-sm ${
                    notification.read ? "text-gray-500" : "text-black"
                  }`}
                >
                  {notification.message}
                </span>
                {!notification.read && (
                  <Button
                    onClick={() => markAsRead(notification.id)}
                    className="text-xs bg-blue-500 text-white hover:bg-blue-600"
                  >
                    <CheckCircle size={16} />
                    Прочитано
                  </Button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </MobileLayout>
  );
}
