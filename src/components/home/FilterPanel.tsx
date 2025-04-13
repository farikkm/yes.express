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
      <h3 className="flex items-center gap-2 text-black mb-4 max-sm:hidden">
        <ArrowUpNarrowWide size={35} />
        <span className="home-title">Sorting</span>
      </h3>

      <div ref={containerRef} className="filter-items">
        {visibleFilters.map((option) => {
          return (
            <button
              key={option}
              onClick={() => toggleFilter(option)}
              className={`filter-item ${
                activeFilters.includes(option) ? "bg-white" : "bg-transparent"
              }`}
            >
              <span className="text-lg">{option}</span>
            </button>
          );
        })}
        {hiddenFilters.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <EllipsisVertical size={40} className="more-button" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                {hiddenFilters.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onClick={() => toggleFilter(option)}
                    className="flex justify-between items-center"
                  >
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
