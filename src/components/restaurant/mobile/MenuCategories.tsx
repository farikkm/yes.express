import { useEffect, useRef, useState } from "react";

const categories = ["Завтраки", "Салаты", "Супы", "Пицца", "Десерты"];

export default function MenuCategories() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Обработка scrollspy
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveCategory(categories[index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      {/* Sticky Category Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm py-3">
        <div className="flex gap-4 justify-center overflow-x-auto">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => scrollToSection(i)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
