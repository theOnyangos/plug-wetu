import { CategoryScroll } from "@/components";
import { categories } from "../../data/StaticData";

const CategoriesComponent = () => {
  return (
    <section className="container mx-auto mt-5">
      {/* Categories */}
      <div className="md:w-[700px] mx-auto border-b dark:border-slate-600 pb-3">
        <CategoryScroll categoryData={categories} />
      </div>
    </section>
  );
};

export default CategoriesComponent;
