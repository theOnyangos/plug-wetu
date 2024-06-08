import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Footer,
  Navigation,
  DynamicHelmet,
  BottomNavBar,
  ThemeChanger,
  AdvertProducts,
  AppDescription,
  ScrollableComponent,
  CategoriesComponent,
  HeroSliderComponent,
} from "@/components";

const HomeScreens = () => {
  const [showModel, setShowModel] = useState(false);

  const toggleShowModel = () => {
    setShowModel(!showModel);
  };

  const advertData = [
    {
      title: "Recently Viewed",
      categorySlug: "recently-viewed",
      data: [],
    },
    {
      title: "Women's Clothing",
      categorySlug: "womens-clothing",
      data: [],
    },
    {
      title: "Handbags",
      categorySlug: "handbags",
      data: [],
    },
    {
      title: "Jewelry",
      categorySlug: "jewelry",
      data: [],
    },
    {
      title: "Men's Clothings",
      categorySlug: "mens-clothing",
      data: [],
    },
    {
      title: "Shoes",
      categorySlug: "shoes",
      data: [],
    },
  ];

  return (
    <ScrollableComponent>
      <DynamicHelmet
        title="Plug Wetu - Welcome to the fusion plugs of kenya."
        description="Plug-wetu is an innovative fusion dealer's application designed to
              streamline the showcasing process for dealers and enhance the
              shopping experience for clients."
      />
      {/* Site Navigation*/}
      <Navigation />

      {/* Categories */}
      <CategoriesComponent />

      {/* Hero Slider */}
      <HeroSliderComponent />

      {/* Advert Products */}
      {advertData?.map((advert) => (
        <AdvertProducts
          key={advert.title}
          title={advert.title}
          categorySlug={advert.categorySlug}
          // data={advert.data}
        />
      ))}

      {/* App Description */}
      <AppDescription />

      {/* Theme Changer */}
      <ThemeChanger />

      {/* Bottom Navigation for mobile screens */}
      <BottomNavBar />

      {/* Footer */}
      <Footer />
    </ScrollableComponent>
  );
};

export default HomeScreens;
