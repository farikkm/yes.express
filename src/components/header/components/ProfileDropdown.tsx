import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserPen } from "lucide-react";
import DropdownMenuOverlay from "../overlay/DropdownMenuOverlay";
import { Link } from "react-router-dom";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

const ProfileDropdown = () => {
  return (
    <DropdownMenuOverlay>
      <DropdownMenuTrigger className="">
        <Link
          to={"/"}
          className="block bg-green-600 rounded-full p-2 cursor-pointer"
        >
          <UserPen color="white" height={40} width={40} />
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-4 rounded-3xl">
        <DropdownMenuLabel className="w-[300px] flex items-center gap-3 px-2 py-3 rounded-2xl">
          <h3 className="font-medium text-lg">Username</h3>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="space-y-2">
          <DropdownMenuItem>
            <Link className="block w-full" to={"/user/dashboard"}>
              <span className="text-lg">My Information</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="block w-full" to={"/signin"}>
              <span className="text-lg">Log out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuOverlay>
  );
};

export default ProfileDropdown;
