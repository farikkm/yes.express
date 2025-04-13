import Header from "@/components/header/desktop/Header";
import { ArrowLeft, Info, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import restaurantBg from "@/assets/images/restaurant-bg.jpg";
import RestaurantBadge from "@/components/restaurant/RestaurantBadge";
import { useEffect, useRef, useState } from "react";
import RestaurantCart from "@/components/restaurant/desktop/RestaurantCart";
import RestaurantCartMobile from "@/components/restaurant/mobile/RestaurantCartMobile";
import { useMediaQuery } from "react-responsive";
import NavigationBar from "@/components/header/mobile/NavigationBar";

const categories = [
  { id: "new", label: "What's new" },
  { id: "ordered", label: "You ordered" },
  { id: "promo", label: "Акции" },
  { id: "sets", label: "Сеты" },
  { id: "burgers", label: "Бургеры" },
  { id: "twisters", label: "Твистеры" },
  { id: "baskets", label: "Баскеты" },
  { id: "chicken", label: "Курица" },
  { id: "salads", label: "Салаты" },
  { id: "lunchboxes", label: "Ланчбоксы" },
  { id: "snacks", label: "Картофель и снэки" },
];

const RestaurantBySlug = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const scrollToCategory = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const topMostEntry = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          const id = topMostEntry.target.getAttribute("data-id");
          if (id) setActiveCategory(id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (sidebarRef.current) {
      const activeItem = sidebarRef.current.querySelector(
        `li[data-id='${activeCategory}']`
      ) as HTMLElement;
      if (activeItem) {
        sidebarRef.current.scrollTo({
          top: activeItem.offsetTop - sidebarRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [activeCategory]);

  const isMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div className="bg-gray-100 h-full">
      {!isMobile ? <Header /> : <NavigationBar />}
      <div className="lg:container mx-auto px-5 lg:pt-30 pt-8 flex gap-10">
        {!isMobile && (
          <aside className="w-55 relative" ref={sidebarRef}>
            <div className="fixed w-55">
              <Link className="restaurant-back-button" to={"/"}>
                <ArrowLeft size={20} className="cursor-pointer rounded-full" />
                <span className="font-medium">All restaurants</span>
              </Link>

              <nav className="mt-8">
                <h3 className="font-medium text-2xl">Menu</h3>
                <ul className="list-none mt-2 space-y-2 select-none">
                  {categories.map(({ id, label }) => (
                    <li
                      key={id}
                      onClick={() => scrollToCategory(id)}
                      className={`restaurant-sidebar-link
                      ${
                        activeCategory === id
                          ? "bg-white text-black font-semibold shadow"
                          : "text-gray-700 hover:bg-white"
                      }`}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        )}

        <div className="grow pb-10">
          {/* Img */}
          <div className="relative group lg:h-[380px] h-[300px] w-full rounded-3xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={restaurantBg}
              alt="restaurant-bg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
            <div className="absolute top-[50%] max-mobile-l:top-[70%] lg:left-10 left-4">
              <h2 className="text-6xl font-bold text-white">KFC</h2>
              <div className="mt-6 items-center gap-2 mobile-l:flex hidden">
                <RestaurantBadge
                  icon={Truck}
                  iconSize={25}
                  title="15-25"
                  subtitle="min"
                />
                <RestaurantBadge
                  icon={Star}
                  iconSize={25}
                  title="4.7"
                  subtitle="500+"
                />
                <div className="flex items-center gap-2 bg-gray-200 opacity-90 px-5 py-2 rounded-2xl">
                  <Info size={40} />
                </div>
              </div>
            </div>
          </div>

          {categories.map(({ id, label }) => (
            <div
              key={id}
              data-id={id}
              ref={(el) => {
                sectionRefs.current[id] = el;
              }}
              className="mt-5 space-y-5 mb-10 scroll-mt-32"
            >
              <div>
                <h2 className="text-4xl font-bold">{label}</h2>

                <div className="mt-4 grid grid-cols-1 mobile-l:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-[16px] gap-x-[16px]">
                  {[...Array(4)].map((_, index) =>
                    !isMobile ? (
                      <RestaurantCart key={index} />
                    ) : (
                      <RestaurantCartMobile key={index} />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBySlug;
