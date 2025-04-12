"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpNarrowWide, Check, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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

let VISIBLE_FILTERS_COUNT = 6;

export default function FilterPanel() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [visibleFilters, setVisibleFilters] = useState<string[]>([]);
  const [hiddenFilters, setHiddenFilters] = useState<string[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  useEffect(() => {
    const resizeHandler = () => {
      const { clientWidth } = containerRef.current || {};
      if (!clientWidth) return;

      if (clientWidth > 1315) {
        VISIBLE_FILTERS_COUNT = 12;
      } else if (clientWidth > 900) {
        VISIBLE_FILTERS_COUNT = 10;
      } else {
        VISIBLE_FILTERS_COUNT = 6;
      }

      const newVisibleFilterOptions = filterOptions.slice(
        0,
        VISIBLE_FILTERS_COUNT
      );
      setVisibleFilters(newVisibleFilterOptions);

      const newHiddenFilterOptions = filterOptions.slice(
        VISIBLE_FILTERS_COUNT,
        filterOptions.length
      );
      setHiddenFilters(newHiddenFilterOptions);
    };

    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="my-8">
      <h3 className="flex items-center gap-2 text-black rounded-full py-2 px-3 bg-transparent border-none ring-0 mb-4 max-sm:hidden">
        <ArrowUpNarrowWide size={35} />
        <span className="text-3xl font-bold">Sorting</span>
      </h3>

      <div
        ref={containerRef}
        className="flex items-center justify-between gap-2 bg-gray-200 rounded-2xl w-full px-2 py-2 relative overflow-hidden max-sm:overflow-x-scroll"
      >
        {visibleFilters.map((option) => {
          return (
            <button
              key={option}
              onClick={() => toggleFilter(option)}
              className={`whitespace-nowrap rounded-full py-2 px-4 text-sm ${
                activeFilters.includes(option) ? "bg-white" : "bg-transparent"
              } hover:bg-gray-300 border-none ring-0`}
            >
              <span className="text-lg">{option}</span>
            </button>
          );
        })}
        {hiddenFilters.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical
                size={40}
                className="cursor-pointer rounded-2xl px-1 py-1.5 hover:bg-gray-100 transition-all duration-200"
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {hiddenFilters.map((option) => (
                  <DropdownMenuItem key={option} onClick={() => toggleFilter(option)} className="flex justify-between items-center">
                    <span className="text-lg px-2">{option}</span>
                    {activeFilters.includes(option) && (
                      <Check className="w-4 h-4 text-green-500" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
