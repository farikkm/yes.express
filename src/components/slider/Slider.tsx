import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import foodImg from "@/assets/images/food.jpg";
import { ArrowLeft, ArrowRight, CarFront, Star } from "lucide-react";

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
    [
      // add plugins here
    ]
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
            <div className="flex flex-col gap-2">
              <div
                style={{ height: IMG_HEIGHT }}
                className="relative flex items-center justify-center overflow-hidden rounded-3xl group"
              >
                <img
                  src={foodImg}
                  className="absolute object-cover h-full w-full"
                  alt="food-jpg"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/6" />
              </div>
              <div className="px-2 space-y-1.5">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">KFC</h5>
                  <div className="flex items-center gap-2">
                    <Star size={16} fill="black" />
                    <span className="text-sm">4.7</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CarFront size={20} />
                  <span className="text-sm">15 - 25 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="cursor-pointer px-2 py-1 bg-gray-200 rounded-3xl text-sm font-medium">
                    Free Delivery
                  </button>
                  <button className="cursor-pointer px-2 py-1 bg-gray-200 rounded-3xl text-sm font-medium">
                    You ordered
                  </button>
                </div>
              </div>
            </div>
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
