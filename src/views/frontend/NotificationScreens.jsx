import useScreenSize from "../../hooks/useScreenSize.js";
import {
  Navigation,
  BottomNavBar,
  DynamicHelmet,
  MobileDetailsNavigation,
} from "@/components";

const NotificationScreens = () => {
  const isMobile = useScreenSize();
  // const location = useLocation();

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

export default NotificationScreens;
