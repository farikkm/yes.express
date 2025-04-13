import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowRight,
  ChevronDown,
  House,
  MapPin,
  MapPinned,
} from "lucide-react";
import { useState } from "react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";

const AddressDropDown = () => {
  const [selectedAddress, setSelectedAddress] = useState({
    name: "Delivery location",
    street: "",
  });
  const addresses = [
    {
      name: "Home",
      street: "Al-xorizmiy, 23",
    },
    {
      name: "Grandpa's apartment",
      street: "Al-xorizmiy, 23",
    },
    {
      name: "Sister's apartment",
      street: "Al-xorizmiy, 23",
    },
    {
      name: "Work",
      street: "Al-xorizmiy, 23",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="dropdown-menu-trigger-green border-none"
      >
        <MapPinned width={30} height={30} className="shrink-0" color="white" />
        <span className="text-white truncate select-none">
          {selectedAddress.name}
        </span>
        <ChevronDown color="white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 rounded-3xl">
        <DropdownMenuLabel className="w-[300px] flex items-center gap-3 px-2 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 cursor-pointer">
          <div className="flex gap-2 grow">
            <MapPin color="green" width={30} height={30} />
            <span className="text-xl">Where to</span>
          </div>
          <div className="flex gap-2">
            <div className="border-r border-r-gray-500"></div>
            <ArrowRight width={20} height={20} />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {addresses.map((addr, index) => (
          <DropdownMenuItem
            className="flex gap-5 items-center"
            key={index}
            onClick={() => setSelectedAddress(addr)}
          >
            <House color="gray" />
            <div className="flex flex-col items-start gap-0.5">
              <h5 className="text-lg">{addr.name}</h5>
              <span className="text-gray-400 text-sm">{addr.street}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddressDropDown;
