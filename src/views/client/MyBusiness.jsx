import React from "react";
import Navigation from "../../components/utils/Navigation";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import BottomNavBar from "../../components/utils/BottomNavBar";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { useLocation } from "react-router-dom";
import AccountBottomNavBar from "../../components/utils/AccountBottomNavBar";

const MyBusiness = () => {
  const isMobile = useScreenSize();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="pb-20">
      <DynamicHelmet
        title="Plug Wetu - My Businesses"
        description="View all your businesses and their details."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"My Businesses"} />
      ) : (
        <Navigation />
      )}

      {/* Bottom Navigation */}
      {pathname === "/business" ? <AccountBottomNavBar /> : <BottomNavBar />}
    </div>
  );
};

export default MyBusiness;
