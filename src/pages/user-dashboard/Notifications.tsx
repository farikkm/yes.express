import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  isRead: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, title: "Новое сообщение", message: "Вы получили новое сообщение от поддержки.", isRead: false },
    { id: 2, title: "Скидка 20%", message: "Используйте промокод на скидку 20%.", isRead: true },
    { id: 3, title: "Обновление приложения", message: "Доступна новая версия приложения!", isRead: false },
  ]);

  const handleMarkAsRead = (id: number) => {
    setNotifications(prev => prev.map(notification => notification.id === id ? { ...notification, isRead: true } : notification));
  };

  const handleDeleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const handleDeleteAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">🔔 Уведомления</h2>

      <Button variant="outline" onClick={handleDeleteAllNotifications} className="mb-4">
        Удалить все уведомления
      </Button>

      <div className="space-y-4">
        {notifications.map(notification => (
          <Card key={notification.id} className={`p-4 ${notification.isRead ? 'bg-gray-100' : 'bg-white'}`}>
            <CardContent className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{notification.title}</h3>
                <p>{notification.message}</p>
              </div>
              <div className="flex space-x-2">
                {!notification.isRead && (
                  <Button variant="outline" size="sm" onClick={() => handleMarkAsRead(notification.id)}>
                    Прочитать
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={() => handleDeleteNotification(notification.id)}>
                  <Trash2Icon className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
