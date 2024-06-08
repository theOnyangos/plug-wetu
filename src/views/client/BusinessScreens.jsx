import useScreenSize from "@/hooks/useScreenSize";
import { useLocation } from "react-router-dom";
import {
  Navigation,
  BottomNavBar,
  DynamicHelmet,
  AccountBottomNavBar,
  MobileDetailsNavigation,
} from "@/components";

const BusinessScreens = () => {
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

export default BusinessScreens;
