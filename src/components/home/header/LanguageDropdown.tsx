import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";
import { Globe } from "lucide-react";

const LanguageDropdown = () => {
  const supportedLanguages = [
    {
      lang: "Русский",
    },
    {
      lang: "Английский",
    },
    {
      lang: "Узбекский",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-col items-center gap-0.5 cursor-pointer px-2 py-3 rounded-2xl hover:bg-gray-100 transition-all duration-200">
        <Globe />
        <span>Language</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-3xl py-2">
        <DropdownMenuGroup className="">
          {supportedLanguages.map((item, index) => (
            <DropdownMenuItem key={index} className="w-[130px]">
              <span className="text-lg">{item.lang}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
