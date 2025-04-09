import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import RestaurantItem from "../home/RestaurantItem";

const IMG_HEIGHT = 200;

const Slider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      drag: false,
      slides: {
        perView: 4,
        spacing: 24,
      },
      breakpoints: {
        "(max-width: 1440px)": {
          slides: {
            perView: 3,
            spacing: 16,
          },
        },
      },
    },
  );

  const handleNext = () => {
    const slider = instanceRef.current;
    if (!slider) return;

    console.log(slider);
    
       
    slider.next();
  };

  const handlePrev = () => {
    const slider = instanceRef.current;
    if (!slider) return;
       
    slider.prev();
  };


  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider max-h-[350px]">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="keen-slider__slide cursor-pointer">
            <RestaurantItem />
          </div>
        ))}
      </div>
      <div
        className="w-full"
      >
        <button style={{ top: IMG_HEIGHT / 2 - 20 }} onClick={handlePrev} className="absolute -left-9 p-4 rounded-4xl shadow-2xl bg-white hover:bg-gray-100">
          <ArrowLeft />
        </button>
        <button style={{ top: IMG_HEIGHT / 2 - 20 }} onClick={handleNext} className="absolute -right-9 p-4 rounded-4xl shadow-2xl bg-white hover:bg-gray-100">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
