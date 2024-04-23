import React, { useState } from "react";
import ThemeChanger from "../../components/ThemeChanger";
import Navigation from "../../components/utils/Navigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import { categories, heroSliderImages } from "../../data/StaticData";
import CategoryScroll from "../../components/categories/CategoryScroll";
import BottomNavBar from "../../components/utils/BottomNavBar";
import ImageCarousel from "../../components/utils/ImageCarousel";
import {
  BiCartAdd,
  BiHeart,
  BiSolidStar,
  BiSolidStarHalf,
  BiStar,
} from "react-icons/bi";
import BottomDrawer from "../../components/utils/BottomDrawer";
import { Link } from "react-router-dom";

const Landing = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="">
      <DynamicHelmet
        title="Plug Wetu - Welcome to the fusion plugs of kenya."
        description="Plug Wetu is a platform that brings together the best of kenyan fusion ware and design. Get your dream outfit at a cost effective price."
      />

      {/* Navigation component */}
      <Navigation />

      {/* Categories Section */}
      <section className="container mx-auto mt-5 border-b dark:border-slate-600 pb-5">
        {/* Categories */}
        <div className="md:w-[700px] mx-auto">
          <CategoryScroll categoryData={categories} />
        </div>
      </section>

      {/* Hero Slider */}
      <section className="container mx-auto mt-5">
        <div className="w-full bg-white md:p-5 dark:bg-dark rounded-md">
          <ImageCarousel images={heroSliderImages} />
        </div>
      </section>

      {/* Recently Viewed products */}
      <section className="container mx-auto mt-5 mb-10">
        <div className="w-full bg-darken p-3 md:p-5 dark:bg-dark rounded-t-md shadow-md flex justify-between items-center">
          <h1 className="text-lg md:text-xl font-semibold text-slate-200">
            Recently Viewed
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-2">
          {/* Product Card */}
          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-5.webp"
              className="w-full h-[280px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                <p className="text-md font-normal text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                  <BiStar className="text-orange-500 dark:text-yellow-500" />
                </div>
                <span className="dark:text-gray-500 text-sm">(56)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-6.webp"
              className="w-full h-[280px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                <p className="text-md font-normal text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                  <BiStar className="text-orange-500 dark:text-yellow-500" />
                </div>
                <span className="dark:text-gray-500 text-sm">(56)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-7.webp"
              className="w-full h-[280px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                <p className="text-md font-normal text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                  <BiStar className="text-orange-500 dark:text-yellow-500" />
                </div>
                <span className="dark:text-gray-500 text-sm">(56)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-8.webp"
              className="w-full h-[280px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                <p className="text-md font-normal text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                  <BiStar className="text-orange-500 dark:text-yellow-500" />
                </div>
                <span className="dark:text-gray-500 text-sm">(56)</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-10.webp"
              className="w-full h-[280px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-sm md:text-md font-normal dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                <p className="text-md font-normal text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>
              {/* Star Rating */}
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStar className="text-orange-500 dark:text-yellow-500" />
                  <BiSolidStarHalf className="text-orange-500 dark:text-yellow-500" />
                  <BiStar className="text-orange-500 dark:text-yellow-500" />
                </div>
                <span className="dark:text-gray-500 text-sm">(56)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All products */}
      <section className="container mx-auto mt-5 mb-20">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-2">
          {/* Product Card */}
          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-1.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-2.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-3.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-4.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-5.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-6.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-7.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-dark rounded-md flex flex-col shadow-md">
            {/* Product Image */}
            <img
              src="/images/image-8.webp"
              className="w-full h-[400px] object-cover rounded-t-md"
              alt=""
            />
            <div className="relative p-3">
              <h1 className="text-lg font-normal mt-2 dark:text-slate-200">
                Arielle Jeans - Navy Blue Plain
              </h1>
              <div className="flex gap-2 items-center">
                <p className="text-md font-semibold text-gray-500 dark:text-gray-400 line-through">
                  Ksh 2000
                </p>
                <p className="text-md font-semibold text-primary dark:text-slate-200">
                  Ksh 1500
                </p>
              </div>

              <div className="flex gap-3 items-center">
                {/* Add to cart button */}
                <button className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center">
                  Add to cart <BiCartAdd />
                </button>
                {/* Like button */}
                <button className="text-dark bg-gray-300 dark:bg-red-500 dark:text-slate-100 mt-2 py-2 px-3 rounded-md">
                  <BiHeart className="text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <button
          className="bg-black text-white dark:bg-slate-100 dark:text-dark py-2 px-5 rounded-md mt-2 flex gap-3 items-center"
          onClick={handleToggleDrawer}
        >
          Toggle Drawer <BiCartAdd />
        </button>
        <BottomDrawer isOpen={isDrawerOpen} onClose={handleToggleDrawer}>
          {/* Content of the drawer */}
          <h2>Bottom Drawer Content</h2>
          <p>This is the content of the bottom drawer.</p>
        </BottomDrawer>
      </section>

      <ThemeChanger />

      <BottomNavBar />
    </div>
  );
};

export default Landing;
