import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import RestaurantItem from "../home/RestaurantItem";


const SliderMobile = () => {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      drag: true,
      slides: {
        perView: "auto",
        spacing: 24,
      },
    },
  );

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider max-h-[350px]">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="keen-slider__slide min-w-[85%] sm:min-w-[70%] cursor-pointer">
            <RestaurantItem />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderMobile