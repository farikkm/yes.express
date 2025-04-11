import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Store } from "lucide-react";
import NavigationBar from "@/components/header/mobile/NavigationBar";

const establishments = [
  "Coffeeday Алматы",
  "Dodo Pizza Астана",
  "Burger King Шымкент",
  "Korean BBQ Караганда",
  "Sushi Master Павлодар",
];

export default function SearchRestaurants() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
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
    <>
      <NavigationBar />
      <div className="min-h-screen px-4 py-6 bg-gray-50">
        <h1 className="text-xl font-semibold mb-4">Поиск заведений</h1>

        <div className="flex gap-2 mb-6">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Введите название заведения"
          />
          <Button className="bg-green-500" onClick={handleSearch}>
            <Search className="w-4 h-4 mr-2" />
            Поиск
          </Button>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Загрузка...</p>
        ) : results.length === 0 && query ? (
          <p className="text-muted-foreground">Ничего не найдено</p>
        ) : (
          <ul className="space-y-2">
            {results.map((res, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:bg-gray-100 transition"
              >
                <Store className="text-blue-500" />
                <span className="font-medium">{res}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
