import { Search } from "lucide-react";

const SearchForRestaurants = () => {
  return (
    <div className="ml-5 border-2 border-green-600 rounded-2xl grow shrink basis-[430px] max-w-[430px] overflow-hidden">
      <form className="flex w-full" action="#">
        <div className="flex items-center gap-3 p-3 w-full">
          <Search color="green" />
          <input
            id="restaurant-search"
            className="focus:outline-none w-full h-full truncate placeholder:opacity-100 focus:placeholder:opacity-0"
            type="text"
            placeholder="Search for restaurants, food and products"
          />
        </div>

        <button className="px-5 bg-green-600 text-white opacity-90 hover:opacity-100 transition-opacity duration-200 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForRestaurants;
