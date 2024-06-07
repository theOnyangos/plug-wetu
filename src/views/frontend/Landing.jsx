import React, { useEffect, useState } from "react";
import ThemeChanger from "../../components/ThemeChanger";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import { categories, heroSliderImages } from "../../data/StaticData.mjs";
import CategoryScroll from "../../components/categories/CategoryScroll";
import BottomNavBar from "../../components/utils/BottomNavBar";
import ImageCarousel from "../../components/utils/ImageCarousel";
import { useNavigate } from "react-router-dom";
import ProductSlideComponent from "../../components/products/ProductSlideComponent";
import ScrollableComponent from "../../components/utils/ScrollableComponent";
import ReviewPopup from "../../components/utils/ReviewPopup";
import Footer from "../../components/utils/Footer";

const Landing = () => {
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      <section className="container mx-auto mt-5">
        {/* Categories */}
        <div className="md:w-[700px] mx-auto border-b dark:border-slate-600 pb-3">
          <CategoryScroll categoryData={categories} />
        </div>
      </section>

      {/* HERO SLIDER */}
      <section className="container mx-auto mt-5">
        <div className="w-full rounded">
          <ImageCarousel images={heroSliderImages} />
        </div>
      </section>

      {/* RECENTLY VIEWED PRODUCTS */}
      <section className="md:container md:mx-auto mt-5 md:mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Recently Viewed
          </h1>

          {/* VIEW ALL BUTTON */}
          <div
            className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
            onClick={() => {
              navigate(`/category-products/recently-viewed`);
            }}
          >
            View All
          </div>
        </div>

        {/* Products */}
        <ProductSlideComponent loading={loading} />
      </section>

      {/* WOMEN'S CLOTHING */}
      <section className="md:container md:mx-auto mt-5 md:mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Women's Clothing
          </h1>

          {/* VIEW ALL BUTTON */}
          <div
            className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
            onClick={() => {
              navigate(`/category-products/recently-viewed`);
            }}
          >
            View All
          </div>
        </div>

        {/* Products */}
        <ProductSlideComponent loading={loading} />
      </section>

      {/* HANDBAGS */}
      <section className="md:container md:mx-auto mt-5 md:mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Handbags
          </h1>

          {/* VIEW ALL BUTTON */}
          <div
            className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
            onClick={() => {
              navigate(`/category-products/recently-viewed`);
            }}
          >
            View All
          </div>
        </div>

        {/* Products */}
        <ProductSlideComponent loading={loading} />
      </section>

      {/* JEWELRY */}
      <section className="md:container md:mx-auto mt-5 md:mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Jewelry
          </h1>

          {/* VIEW ALL BUTTON */}
          <div
            className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
            onClick={() => {
              navigate(`/category-products/recently-viewed`);
            }}
          >
            View All
          </div>
        </div>

        {/* Products */}
        <ProductSlideComponent loading={loading} />
      </section>

      {/* MENS CLOTHING */}
      <section className="md:container md:mx-auto mt-5 md:mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Men's Clothing
          </h1>

          {/* VIEW ALL BUTTON */}
          <div
            className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
            onClick={() => {
              navigate(`/category-products/recently-viewed`);
            }}
          >
            View All
          </div>
        </div>

        {/* Products */}
        <ProductSlideComponent loading={loading} />
      </section>

      {/* SHOES */}
      <section className="md:container md:mx-auto mt-5 md:mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Shoes
          </h1>

          {/* VIEW ALL BUTTON */}
          <div
            className="text-slate-100 dark:text-primary-light uppercase cursor-pointer text-sm"
            onClick={() => {
              navigate(`/category-products/recently-viewed`);
            }}
          >
            View All
          </div>
        </div>

        {/* Products */}
        <ProductSlideComponent loading={loading} />
      </section>

      {/* APP DESCRIPTION */}
      <section className="md:container md:mx-auto mt-5 mb-20">
        <div className="w-full bg-darken p-5 dark:bg-dark md:rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl leading-none text-slate-200 dark:text-bold">
            Welcome to the Fusion Dealers of Kenya.
          </h1>
        </div>

        <div className="w-full bg-white dark:bg-dark p-5 md:rounded-b-md shadow-md">
          <h3 className="site-logo dark:text-slate-100 mb-3">
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
            <br /> With Plug-wetu, the purchasing journey becomes intuitive and
            seamless, empowering clients to explore options and engage with
            dealers with ease
          </p>
        </div>
      </section>

      <ThemeChanger />

      <BottomNavBar />

      <Footer />
    </ScrollableComponent>
  );
};

export default Landing;
