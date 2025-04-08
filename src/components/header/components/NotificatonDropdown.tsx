import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft, Bell, EllipsisVertical, Mail, Search } from "lucide-react";
import { useState } from "react";
import DropdownMenuOverlay from "../overlay/DropdownMenuOverlay";

const NotificatonDropdown = () => {
  const [isSearch, setIsSearch] = useState(false);

  const notificationsArray = [
    {
      date: "15 march",
      notifications: [
        {
          title: "Goals",
          subtitle:
            "You have completed all the tasks and received a reward asdfads",
        },
        {
          title: "Goals",
          subtitle:
            "You have completed all the tasks and received a reward asdfads",
        },
      ],
    },
    {
      date: "17 march",
      notifications: [
        {
          title: "Goals",
          subtitle:
            "You have completed all the tasks and received a reward asdfads",
        },
      ],
    },
    {
      date: "21 march",
      notifications: [
        {
          title: "Goals",
          subtitle:
            "You have completed all the tasks and received a reward asdfads",
        },
      ],
    },
  ];

  return (
    <DropdownMenuOverlay>
      <DropdownMenuTrigger className="flex flex-col items-center gap-0.5 cursor-pointer px-2 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-200">
        <Bell />
        <span>Notifications</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-3xl">
        {isSearch ? (
          <DropdownMenuLabel className="w-[500px] px-2 py-3">
            <div className="flex gap-2 items-center">
              <ArrowLeft
                onClick={() => setIsSearch(false)}
                size={40}
                className="cursor-pointer rounded-2xl px-1 py-1.5 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
              />
              <Input className="px-2" placeholder="Поиск уведомлений" />
            </div>
          </DropdownMenuLabel>
        ) : (
          <DropdownMenuLabel className="w-[500px] px-2 py-3">
            <div className="flex items-center gap-3 justify-between">
              <h3 className="text-2xl">Notifications</h3>
              <div className="flex items-center gap-2">
                <Search
                  onClick={() => setIsSearch(true)}
                  size={40}
                  className="cursor-pointer rounded-2xl px-1 py-1.5 hover:bg-gray-100 transition-all duration-200"
                />
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
          </DropdownMenuLabel>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuGroup className="px-4 pb-4 space-y-4">
          {notificationsArray.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <span className="text-center text-sm text-gray-400">
                {item.date}
              </span>
              {item.notifications.map((notif, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Mail size={28} />
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-100 grow rounded-2xl max-w-[430px] select-none"
                  >
                    <h5 className="font-bold text-lg">{notif.title}</h5>
                    <p className="">{notif.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuOverlay>
  );
};

export default NotificatonDropdown;
