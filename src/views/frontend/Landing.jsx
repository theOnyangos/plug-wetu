import React, { useEffect, useState } from "react";
import ThemeChanger from "../../components/ThemeChanger";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import {
  mobileCategories,
  mobileProducts,
  heroSliderImages,
} from "../../data/StaticData";
import CategoryScroll from "../../components/categories/CategoryScroll";
import BottomNavBar from "../../components/utils/BottomNavBar";
import ImageCarousel from "../../components/utils/ImageCarousel";
import { Link } from "react-router-dom";
import CatalogueComponent from "../../components/products/CatalogueComponent";
import RecentlyViewedComponent from "../../components/products/RecentlyViewedComponent";
import Modal from "../../components/utils/Modal";
import ScrollableComponent from "../../components/utils/ScrollableComponent";

const Landing = () => {
  const [showModel, setShowModel] = useState(false);
  const [loading, setLoading] = useState(true);

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
        <div className="md:w-full mx-auto border-b dark:border-slate-600 py-3 md:p-5 bg-white dark:bg-dark">
          <CategoryScroll categoryData={mobileCategories} />
        </div>
      </section>

      {/* HERO SLIDER */}
      <section className="container mx-auto mt-5">
        <div className="w-full ">
          <ImageCarousel images={heroSliderImages} />
        </div>
      </section>

      {/* RECENTLY VIEWED PRODUCTS */}
      <section className="container mx-auto mt-5 mb-10">
        <div className="w-full bg-primary p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Recently Viewed
          </h1>

          {/* VIEW ALL BUTTON */}
          <Link
            to={"/all-recently-viewed"}
            className="text-white dark:text-primary-light uppercase"
          >
            View All
          </Link>
        </div>

        {/* Products */}
        <RecentlyViewedComponent loading={loading} />
      </section>

      {/* ALL PRODUCTS */}
      <section className="container mx-auto mt-5 mb-10">
        <div className="w-full bg-primary p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Our Catalogue
          </h1>

          {/* View All Button */}
          <Link
            to={"/all-recently-viewed"}
            className="text-white dark:text-primary-light uppercase"
          >
            View All
          </Link>
        </div>

        {/* Products */}
        <CatalogueComponent catalogueData={mobileProducts} loading={loading} />
      </section>

      {/* APP DESCRIPTION */}
      <section>
        <div className="container mx-auto mt-5 mb-20">
          <div className="w-full bg-primary p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
            <h1 className="text-lg md:text-xl font-semibold text-slate-200 dark:text-bold">
              Welcome to the Fusion Dealers of Kenya.
            </h1>
          </div>

          <div className="w-full bg-white dark:bg-dark p-3 md:p-5 rounded-b-md shadow-md">
            <h3
              onClick={toggleShowModel}
              className="site-logo dark:text-slate-100 mb-3"
            >
              Phon<span className="text-primary">Zetu</span>
            </h3>
            <p className="text-sm md:base dark:text-slate-200">
              Introducing our cutting-edge mobile store application, your
              one-stop destination for all things mobile in Kenya. Get ready to
              embark on a seamless journey through a vast array of smartphones,
              tablets, and accessories, all curated to meet your every need and
              desire.
              <br />
              <br />
              Explore an extensive catalog featuring the latest releases from
              renowned brands, alongside budget-friendly options that don't
              compromise on quality. From sleek flagship devices to reliable
              budget-friendly models, we have something for everyone.
              <br />
              <br />
              Discover the perfect smartphone tailored to your lifestyle,
              whether you're a tech enthusiast craving the latest innovations or
              a practical user seeking durability and functionality. With
              detailed product descriptions, specifications, and customer
              reviews, you can make informed decisions with confidence.
              <br />
              <br />
              But we don't stop at just phones. Dive into our collection of
              accessories, including stylish cases, durable screen protectors,
              and high-quality headphones, to enhance your mobile experience and
              express your unique style.
              <br />
              <br />
              With our user-friendly interface and secure payment options,
              shopping has never been easier or more enjoyable. Browse, compare,
              and purchase your favorite mobile devices and accessories with
              just a few taps, all from the comfort of your own home.
              <br />
              <br />
              Experience convenience, reliability, and innovation like never
              before with our mobile store application. Elevate your mobile
              experience today!
            </p>
          </div>
        </div>
      </section>

      {showModel && <Modal onClose={toggleShowModel} />}

      <ThemeChanger />

      <BottomNavBar />
    </ScrollableComponent>
  );
};

export default Landing;
