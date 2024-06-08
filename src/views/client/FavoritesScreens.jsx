import useScreenSize from "@/hooks/useScreenSize";
import { useLocation } from "react-router-dom";
import {
  Navigation,
  BottomNavBar,
  DynamicHelmet,
  AccountBottomNavBar,
  MobileDetailsNavigation,
} from "@/components";

const FavoritesScreens = () => {
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

export default FavoritesScreens;
