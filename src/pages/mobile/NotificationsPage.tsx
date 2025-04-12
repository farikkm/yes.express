import { useState } from "react";
import {
  Bell,
  Check,
  CheckCircle,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationBar from "@/components/header/mobile/NavigationBar";
import MobileLayout from "@/layout/mobile/MobileLayout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockNotifications = [
  { id: 1, message: "Ваш заказ принят", read: false },
  { id: 2, message: "Ваш заказ в пути", read: false },
  { id: 3, message: "Заказ доставлен", read: true },
];

function NotificationsPage() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [loading] = useState(false);

  const [selected, setSelected] = useState("new");

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
      <div className="mt-2">
        <div className="border-2 border-green-600 rounded-2xl grow shrink w-full overflow-hidden">
          <form className="flex w-full relative" action="#">
            <div className="flex items-center gap-3 p-3 w-full">
              <Search color="green" />
              <input
                id="restaurant-search"
                className="focus:outline-none w-full h-full truncate placeholder:opacity-100 focus:placeholder:opacity-0"
                type="text"
                placeholder="Search"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className="px-5 text-white opacity-90 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                <SlidersHorizontal color="green" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-3xl py-2">
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    className="w-[130px] flex justify-between items-center"
                    onSelect={() => setSelected("new")}
                  >
                    <span className="text-lg">Новые</span>
                    {selected === "new" && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-[130px] flex justify-between items-center"
                    onSelect={() => setSelected("old")}
                  >
                    <span className="text-lg">Старые</span>
                    {selected === "old" && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </form>
        </div>
      </div>

      <div className="min-h-screen">
        {loading ? (
          <p className="text-muted-foreground">Загрузка...</p>
        ) : notifications.length === 0 ? (
          <p className="text-muted-foreground">Нет новых уведомлений</p>
        ) : (
          <div className="space-y-4 mt-3">
            <button className="inline-flex justify-end w-full">
              <span className="text-lg px-2 bg-gray-200 p-1 rounded-2xl">
                Удалить все
              </span>
            </button>
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
                      notification.read ? "text-gray-500" : "text-green-500"
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
                      className="text-xs bg-green-500 text-white hover:bg-green-600"
                    >
                      <CheckCircle size={16} />
                      Прочитано
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}

export default NotificationsPage;
