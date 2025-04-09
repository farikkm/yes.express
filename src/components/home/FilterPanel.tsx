"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpNarrowWide, MoreHorizontal } from "lucide-react";

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
  const [visibleOptions, setVisibleOptions] = useState<string[]>(filterOptions);
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const checkOverflow = () => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    let usedWidth = 0;
    const newVisible: string[] = [];
    const newHidden: string[] = [];

    for (const option of filterOptions) {
      const el = itemRefs.current[option];
      if (!el) continue;

      const width = el.offsetWidth + 8; // Добавляем маржи
      if (usedWidth + width < containerWidth - 100) {
        newVisible.push(option);
        usedWidth += width;
      } else {
        newHidden.push(option);
      }
    }

    setVisibleOptions(newVisible);
    setHiddenOptions(newHidden);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          checkOverflow();
        });
      });
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        checkOverflow();
      });
    });

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setShowMore(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        {visibleOptions.map((option) => {
          const isVisible = visibleOptions.includes(option);
          return (
            <button
              key={option}
              ref={(el) => {
                itemRefs.current[option] = el;
              }}
              onClick={() => toggleFilter(option)}
              className={`whitespace-nowrap rounded-full py-2 px-4 text-sm ${
                activeFilters.includes(option) ? "bg-white" : "bg-transparent"
              } hover:bg-gray-300 border-none ring-0 ${
                isVisible ? "" : "hidden"
              }`}
            >
              <span className="text-lg">{option}</span>
            </button>
          );
        })}

        {hiddenOptions.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="whitespace-nowrap rounded-full py-2 px-4 bg-transparent hover:bg-gray-300 border-none ring-0 flex items-center gap-1"
            >
              <MoreHorizontal />
              <span className="text-sm">More</span>
            </button>

            {showMore && (
              <div
                className="absolute right-0 mt-2 bg-white border rounded-xl shadow-lg z-10 p-3 flex flex-col gap-2 min-w-[150px] max-h-60 overflow-y-auto"
                style={{ maxHeight: "200px" }}
              >
                {hiddenOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleFilter(option)}
                    className={`text-left px-3 py-1 rounded-md text-sm ${
                      activeFilters.includes(option)
                        ? "bg-gray-100"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <span className="text-lg">{option}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
