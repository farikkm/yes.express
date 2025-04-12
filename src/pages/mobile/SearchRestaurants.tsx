import { useState } from "react";
import { Check, Search, SlidersHorizontal } from "lucide-react";
import NavigationBar from "@/components/header/mobile/NavigationBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import RestaurantItem from "@/components/home/RestaurantItem";
import MobileLayout from "@/layout/mobile/MobileLayout";

const establishments = ["KFC", "KFC", "KFC", "KFC", "KFC"];

export default function SearchRestaurants() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [selected, setSelected] = useState("restaurants");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const filtered = establishments.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <MobileLayout title="Поиск">
      <NavigationBar />

      <div className="mt-2">
        <div className="border-2 border-green-600 rounded-2xl grow shrink w-full overflow-hidden">
          <form
            onSubmit={handleSearch}
            className="flex w-full relative"
            action="#"
          >
            <div className="flex items-center gap-3 p-3 w-full">
              <Search color="green" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
                    onSelect={() => setSelected("restaurants")}
                  >
                    <span className="text-lg">Рестораны</span>
                    {selected === "restaurants" && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-[130px] flex justify-between items-center"
                    onSelect={() => setSelected("foods")}
                  >
                    <span className="text-lg">Блюда</span>
                    {selected === "foods" && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </form>
        </div>
      </div>

      {loading ? (
        <p className="text-muted-foreground">Загрузка...</p>
      ) : results.length === 0 && query ? (
        <p className="text-muted-foreground">Ничего не найдено</p>
      ) : (
        <ul className="space-y-4 mt-4">
          {results.map((_, idx) => (
            <RestaurantItem key={idx} />
          ))}
        </ul>
      )}
    </MobileLayout>
  );
}
