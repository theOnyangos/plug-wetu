import { ImageCarousel } from "@/components";
import { heroSliderImages } from "../../data/StaticData";

const HeroSliderComponent = () => {
  return (
    <section className="container mx-auto mt-5">
      <div className="w-full rounded">
        <ImageCarousel images={heroSliderImages} />
      </div>
    </section>
  );
};

export default HeroSliderComponent;
