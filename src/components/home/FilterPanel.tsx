"use client";

import { useRef, useState } from "react";
import { ArrowUpNarrowWide } from "lucide-react";

const filterOptions = [
  "Chicken",
  "Meat",
  "Fish",
  "Vegetarian",
  "Vegan",
  "Pizza",
  "Sushi",
  "Wok",
  "Pasta",
  "Breakfast",
  "Lunch",
  "Dinner",
];

export default function FilterPanel() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };


  return (
    <div className="my-10">
      <h3 className="flex items-center gap-2 text-black rounded-full py-2 px-3 bg-transparent border-none ring-0 mb-4">
        <ArrowUpNarrowWide size={35} />
        <span className="text-3xl font-bold">Sorting</span>
      </h3>

      <div
        ref={containerRef}
        className="flex items-center justify-between gap-2 bg-gray-200 rounded-2xl w-full px-2 py-2 relative overflow-hidden"
      >
        {filterOptions.map((option) => {
          return (
            <button
              key={option}
              ref={(el) => {
                itemRefs.current[option] = el;
              }}
              onClick={() => toggleFilter(option)}
              className={`whitespace-nowrap rounded-full py-2 px-4 text-sm ${
                activeFilters.includes(option) ? "bg-white" : "bg-transparent"
              } hover:bg-gray-300 border-none ring-0`}
            >
              <span className="text-lg">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
