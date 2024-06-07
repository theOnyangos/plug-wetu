import React from "react";
import Navigation from "../../components/utils/Navigation";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import BottomNavBar from "../../components/utils/BottomNavBar";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { useLocation } from "react-router-dom";

const Notifications = () => {
  const isMobile = useScreenSize();
  const location = useLocation();

  return (
    <div className="pb-20">
      <DynamicHelmet
        title="Plug Wetu - Notifications area."
        description="See all promotions, offers, and notifications from Plug Wetu."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"Notifications"} />
      ) : (
        <Navigation />
      )}

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default Notifications;
