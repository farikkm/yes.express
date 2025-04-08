import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mt-4">
        <div className="container mx-auto px-5 space-y-4">
          <h2 className="text-3xl font-bold">Вы заказывали: </h2>
          <Slider />
        </div>
        <div className="container mx-auto px-5 space-y-4">
          <h2 className="text-3xl font-bold">Вы заказывали: </h2>
          <Slider />
        </div>
        <div className="container mx-auto px-5 space-y-4">
          <h2 className="text-3xl font-bold">Вы заказывали: </h2>
          <Slider />
        </div>
        <div className="container mx-auto px-5 space-y-4">
          <h2 className="text-3xl font-bold">Вы заказывали: </h2>
          <Slider />
        </div>
      </main>
    </>
  );
};

export default Home;
