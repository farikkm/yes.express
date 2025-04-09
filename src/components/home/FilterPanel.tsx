"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpNarrowWide } from "lucide-react";

const filterOptions = [
  "Chicken",
  "Meat",
  "Fish",
  "Vegetarian",
  "Vegan",
];

export default function FilterPanel() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="my-10 flex justify-between items-center flex-wrap gap-2 p-2 bg-gray-100 rounded-2xl w-full">
      {filterOptions.map((option) => (
        <Button
          key={option}
          variant={activeFilters.includes(option) ? "ghost" : "outline"}
          onClick={() => toggleFilter(option)}
          className="rounded-full py-6 px-5 bg-transparent hover:bg-gray-300 outline-none border-none ring-0"
        >
          {option}
        </Button>
      ))}
      <Button
        className="text-black rounded-full py-6 px-5 bg-transparent hover:bg-gray-300 outline-none border-none ring-0"
      >
        <ArrowUpNarrowWide />
        Sorting
      </Button>
    </div>
  );
}
