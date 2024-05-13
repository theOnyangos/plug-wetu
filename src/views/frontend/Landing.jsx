import React, { useEffect, useState } from "react";
import ThemeChanger from "../../components/ThemeChanger";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import {
  categories,
  fusionProducts,
  heroSliderImages,
} from "../../data/StaticData.mjs";
import CategoryScroll from "../../components/categories/CategoryScroll";
import BottomNavBar from "../../components/utils/BottomNavBar";
import ImageCarousel from "../../components/utils/ImageCarousel";
import { Link, useLocation } from "react-router-dom";
import CatalogueComponent from "../../components/products/CatalogueComponent";
import RecentlyViewedComponent from "../../components/products/RecentlyViewedComponent";
import ScrollableComponent from "../../components/utils/ScrollableComponent";

const Landing = () => {
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const toggleShowModel = () => {
    setShowModel(!showModel);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollableComponent>
      <DynamicHelmet
        title="Plug Wetu - Welcome to the fusion plugs of kenya."
        description="Plug-wetu is an innovative fusion dealer's application designed to
              streamline the showcasing process for dealers and enhance the
              shopping experience for clients."
      />

      {/* NAVIGATION MENU */}
      <Navigation />

      {/* CATEGORIES */}
      <section className="container mx-auto mt-5 border-b dark:border-slate-600 pb-5">
        {/* Categories */}
        <div className="md:w-[700px] mx-auto">
          <CategoryScroll categoryData={categories} />
        </div>
      </section>

      {/* HERO SLIDER */}
      <section className="container mx-auto mt-5">
        <div className="w-full bg-white md:p-5 dark:bg-dark rounded-md">
          <ImageCarousel images={heroSliderImages} />
        </div>
      </section>

      {/* RECENTLY VIEWED PRODUCTS */}
      <section className="container mx-auto mt-5 mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Recently Viewed
          </h1>

          {/* VIEW ALL BUTTON */}
          <Link
            to={"/all-recently-viewed"}
            className="text-primary dark:text-primary-light uppercase"
          >
            View All
          </Link>
        </div>

        {/* Products */}
        <RecentlyViewedComponent loading={loading} />
      </section>

      {/* ALL PRODUCTS */}
      <section className="container mx-auto mt-5 mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Our Catalogue
          </h1>

          {/* View All Button */}
          <Link
            to={"/all-recently-viewed"}
            className="text-primary dark:text-primary-light uppercase"
          >
            View All
          </Link>
        </div>

        {/* Products */}
        <CatalogueComponent catalogueData={fusionProducts} loading={loading} />
      </section>

      {/* APP DESCRIPTION */}
      <section>
        <div className="container mx-auto mt-5 mb-20">
          <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
            <h1 className="text-lg md:text-xl leading-none text-slate-200 dark:text-bold">
              Welcome to the Fusion Dealers of Kenya.
            </h1>
          </div>

          <div className="w-full bg-white dark:bg-dark p-3 md:p-5 rounded-b-md shadow-md">
            <h3
              className="site-logo dark:text-slate-100 mb-3"
            >
              Plug<span className="text-primary">Wetu</span>
            </h3>
            <p className="text-sm md:base dark:text-slate-200">
              Plug-wetu is an innovative fusion dealer's application designed to
              streamline the showcasing process for dealers and enhance the
              shopping experience for clients. <br />
              <br /> Dealers can effortlessly display their extensive catalog of
              fusion wares, presenting them to clients for marketing purposes.
              Through the app, clients gain access to a diverse array of fusion
              products, enabling them to browse, evaluate, and make informed
              decisions about potential purchases. <br />
              <br /> With Plug-wetu, the purchasing journey becomes intuitive
              and seamless, empowering clients to explore options and engage
              with dealers with ease
            </p>
          </div>
        </div>
      </section>


      <ThemeChanger />

      <BottomNavBar />
    </ScrollableComponent>
  );
};

export default Landing;
