"use client";

import { useState } from "react";
import { ArrowUpNarrowWide } from "lucide-react";

const filterOptions = [
  "Chicken",
  "Meat",
  "Fish",
  "Vegetarian",
  "Vegan",
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
    <div className="my-10">
      <h3 className="flex items-center  gap-2 text-black rounded-full py-2 px-3 bg-transparent border-none ring-0">
        <ArrowUpNarrowWide size={35}/>
        <span className="text-3xl font-bold">Sorting</span>
      </h3>
      <div className="flex justify-between items-center flex-wrap gap-2 p-2 bg-gray-50 rounded-2xl w-full">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => toggleFilter(option)}
            className={`rounded-full py-2 px-3 ${
              activeFilters.includes(option) ? "bg-gray-200" : "bg-transparent"
            } hover:bg-gray-300 border-none ring-0`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
