import React from "react";
import Navigation from "../../components/utils/Navigation";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import BottomNavBar from "../../components/utils/BottomNavBar";
import useScreenSize from "../../hooks/useScreenSize";
import { useLocation } from "react-router-dom";
import AccountBottomNavBar from "../../components/utils/AccountBottomNavBar";

const MyFavorites = () => {
  const isMobile = useScreenSize();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="pb-20">
      <DynamicHelmet
        title="Plug Wetu -My Favorites"
        description="View all your favorite products saved at the time of shopping."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"My Favorites"} />
      ) : (
        <Navigation />
      )}

      {/* Bottom Navigation */}
      {pathname === "/favorites" ? <AccountBottomNavBar /> : <BottomNavBar />}
    </div>
  );
};

export default MyFavorites;
