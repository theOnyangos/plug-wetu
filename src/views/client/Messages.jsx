import React from "react";
import Navigation from "../../components/utils/Navigation";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import DynamicHelmet from "../../components/DynamicHelmet";
import BottomNavBar from "../../components/utils/BottomNavBar";
import useScreenSize from "../../hooks/useScreenSize";
import { useLocation } from "react-router-dom";
import AccountBottomNavBar from "../../components/utils/AccountBottomNavBar";

const Messages = () => {
  const isMobile = useScreenSize();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="pb-20">
      <DynamicHelmet
        title="Plug Wetu - My Messages"
        description="View all your messages sent by other users."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"My Messages"} />
      ) : (
        <Navigation />
      )}

      {/* Bottom Navigation */}
      {pathname === "/messages" ? <AccountBottomNavBar /> : <BottomNavBar />}
    </div>
  );
};

export default Messages;
