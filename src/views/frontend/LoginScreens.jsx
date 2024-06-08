import React, { useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import {
  SignIn,
  SignUp,
  ThemeChanger,
  DynamicHelmet,
  LoginScreenComponent,
} from "@/components";

const LoginScreens = () => {
  const isMobile = useScreenSize();
  const [isSigning, setIsSigning] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          {/* Sign In Or Sign Up */}
          {isSigning ? (
            <SignIn setIsSigning={setIsSigning} />
          ) : (
            <SignUp setIsSigning={setIsSigning} />
          )}
        </>
      )}

      {/* Onboarding */}
      <LoginScreenComponent
        isOnboarding={isOnboarding}
        onboardingContent={onboardingContent}
        currentIndex={currentIndex}
        handleGetStarted={handleGetStarted}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleSkip={handleSkip}
      />

      {/* Theme changer */}
      <ThemeChanger />
    </div>
  );
};

export default LoginScreens;
