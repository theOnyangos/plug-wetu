import React, { useEffect, useState } from "react";
import { fusionProducts } from "../../data/StaticData.js";
import CategoryProducts from "../../components/products/CategoryProducts";
import ThemeChanger from "../../components/ThemeChanger";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import Navigation from "../../components/utils/Navigation";
import useScreenSize from "../../hooks/useScreenSize.js";
import BottomNavBar from "../../components/utils/BottomNavBar";
import Footer from "../../components/utils/Footer";

const CategoryProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const isMobile = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"Category Products"} />
      ) : (
        <Navigation />
      )}

      <section className="container mx-auto pb-20 md:pb-10">
        {/* Products */}
        <CategoryProducts catalogueData={fusionProducts} loading={loading} />
      </section>

      {/* Theme Changer */}
      <ThemeChanger />

      <BottomNavBar />

      <Footer />
    </>
  );
};

export default CategoryProductsPage;
