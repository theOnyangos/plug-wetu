import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DynamicHelmet from "../../components/DynamicHelmet";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import Navigation from "../../components/utils/Navigation";
import BottomNavBar from "../../components/utils/BottomNavBar";
import {
  BiArrowBack,
  BiArrowToRight,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from "react-icons/bi";
import ThemeChanger from "../../components/ThemeChanger";
import useThemeStore from "../../store/UseThemeStore";

const Login = () => {
  const isMobile = useScreenSize();
  const navigate = useNavigate();
  const [isSigning, setIsSigning] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(true);
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [currentIndex, setCurrentIndex] = useState(0);

  const isDarkMode = useThemeStore(
    (state) =>
      state.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
  );

  const onboardingContent = [
    {
      title: "Welcome to PlugWetu!",
      description:
        "Your ultimate destination for discovering unique fusion products from a variety of businesses, all under one convenient account! Get ready to explore an array of catalogs showcasing the latest trends at unbeatable prices.",
    },
    {
      title: "Explore Diverse Catalogs",
      description:
        "Discover a world of possibilities with plugWetu! Say goodbye to the hassle of hopping between different accounts. Here, you'll find everything you need from multiple businesses, effortlessly accessible under one roof.",
    },
    {
      title: "Support Young Enterprises",
      description:
        "Ready to revolutionize your shopping experience? plugWetu is here to make it happen! Enjoy the convenience of browsing diverse catalogs and finding the best deals, all while supporting young enterprises on their journey.",
    },
    {
      title: "Seamless Shopping Experience",
      description:
        "Join plugWetu and unlock a treasure trove of fusion products waiting to be explored! With our user-friendly interface, discovering new trends and connecting with plug owners has never been easier.",
    },
    {
      title: "Community-Driven Reviews",
      description:
        "Experience the power of community-driven reviews at plugWetu! Share your thoughts, discover hidden gems, and support budding businesses—all in one seamless platform designed just for you.",
    },
  ];

  const handleNext = () => {
    if (currentIndex < onboardingContent.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsOnboarding(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSkip = () => {
    setIsOnboarding(false);
  };

  const handleGetStarted = () => {
    setIsOnboarding(false);
  };

  return (
    <div className="">
      <DynamicHelmet
        title="Plug Wetu - User Accounts."
        description="Manage all your businesses, orders, and account settings."
      />

      {/* Navigation */}
      {!isOnboarding && (
        <>
          {/* Sign In */}
          {isSigning ? (
            <Signing setIsSigning={setIsSigning} />
          ) : (
            <SignUp setIsSigning={setIsSigning} />
          )}
        </>
      )}

      {/* Onboarding */}
      {isOnboarding && (
        <>
          <div className="flex flex-col items-center justify-center h-screen bg-slate-200 dark:bg-darken">
            {/* Back Icon */}
            <div
              className="absolute top-5 left-5 cursor-pointer bg-white dark:bg-dark p-3 rounded-full"
              onClick={() => navigate("/")}
            >
              <BiArrowBack className="text-2xl text-darken dark:text-slate-100" />
            </div>

            {/* Logo */}
            <div className="border flex gap-5 flex-col items-center justify-center p-5 rounded-md dark:border-slate-700 border-gray-300 bg-white dark:bg-transparent w-[90%] md:w-[600px] py-10">
              <div className="w-[200px]">
                <img
                  src={
                    isDarkMode
                      ? "/images/pw-logo-dark.png"
                      : "/images/pw-logo.png"
                  }
                  alt=""
                />
              </div>

              <div className="w-full md:w-[500px]">
                <h1 className="text-3xl font-bold text-center dark:text-cyan-500 tracking-tight leading-none">
                  {onboardingContent[currentIndex].title}
                </h1>
              </div>

              <div className="w-full md:w-[500px] border border-gray-300 bg-white dark:bg-dark dark:border-slate-700 p-3 rounded-md">
                <p className="text-center text-gray-500 dark:text-slate-200 mt-2 text-sm md:text-base">
                  {onboardingContent[currentIndex].description}
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="w-full md:w-[500px] flex gap-3 items-center justify-between">
                {currentIndex === 0 && (
                  <button
                    onClick={handleSkip}
                    className="btn bg-slate-500 text-white w-full text-lg px-5 py-2 rounded"
                  >
                    Skip
                  </button>
                )}
                {currentIndex > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded flex justify-center items-center gap-2"
                  >
                    <BiLeftArrowAlt />
                    Previous
                  </button>
                )}
                {currentIndex < onboardingContent.length - 1 && (
                  <button
                    onClick={handleNext}
                    className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded flex justify-center items-center gap-2"
                  >
                    Next
                    <BiRightArrowAlt />
                  </button>
                )}
                {currentIndex === onboardingContent.length - 1 && (
                  <button
                    onClick={handleGetStarted}
                    className="btn bg-darken dark:bg-slate-200 dark:text-darken text-white w-[100%] text-lg px-5 py-2 md:py-3 rounded"
                  >
                    Get Started
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Theme changer */}
      <ThemeChanger />
    </div>
  );
};

const Signing = ({ setIsSigning }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-200 dark:bg-darken">
      <div className="w-[90%] md:w-[600px] bg-white dark:bg-dark p-5 border border-gray-300 dark:border-slate-700 rounded-md py-10 md:container md:mx-auto">
        <h1 className="text-3xl font-bold text-center dark:text-slate-100 tracking-tight mb-5 border-b border-gray-300 dark:border-slate-700 pb-5">
          Sign In
        </h1>
        <p className="text-gray-500 dark:text-slate-500 mt-2 text-sm">
          Sign in to your account to start selling and buying products from a
          variety of businesses, all under one convenient account!
        </p>

        {/* Sign In Form */}
        <form onSubmit={() => {}} className="w-full mt-5">
          {/* Email Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          {/* Password Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="password"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          {/* Forget password and remember me */}
          <div className="flex justify-between items-center mb-5">
            <div>
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="mr-2"
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-500 dark:text-slate-500"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-primary dark:text-white"
            >
              Forgot password?
            </Link>
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded"
            >
              Sign In
            </button>
          </div>

          {/* Link to sighup */}
          <div className="mb-5">
            <p className="text-center text-gray-500 dark:text-slate-500 mt-2 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => setIsSigning((previous) => !previous)}
                className="text-primary dark:text-white"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

const SignUp = ({ setIsSigning }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-slate-200 dark:bg-darken">
      <div className="w-[90%] md:w-[600px] bg-white dark:bg-dark p-5 border border-gray-300 dark:border-slate-700 rounded-md py-10 md:container md:mx-auto">
        <h1 className="text-3xl font-bold text-center dark:text-slate-100 tracking-tight mb-5 border-b border-gray-300 dark:border-slate-700 pb-5">
          Sign Up
        </h1>
        <p className="text-gray-500 dark:text-slate-500 mt-2 text-sm">
          Create an account. Get ready to explore a world of fusion products
          from a variety of businesses, all under one convenient account!
        </p>

        {/* Sign Up Form */}
        <form onSubmit={() => {}} className="w-full mt-5">
          {/* Full Name Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          {/* Email Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="email"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          {/* Password Input */}
          <div className="w-full mb-5">
            <label
              htmlFor="password"
              className="text-sm block font-bold text-dark dark:text-gray-200"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border dark:border-slate-700 dark:text-slate-100 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full dark:bg-darken placeholder:font-light placeholder:italic"
            />
          </div>

          <div className="mb-5">
            <button
              type="submit"
              className="btn bg-primary text-white w-full text-lg px-5 py-2 rounded"
            >
              Sign Up
            </button>
          </div>

          {/* Link to sighup */}
          <div className="mb-5">
            <p className="text-center text-gray-500 dark:text-slate-500 mt-2 text-sm">
              Already have an account?{" "}
              <button
                onClick={() => setIsSigning((previous) => !previous)}
                className="text-primary dark:text-white"
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
