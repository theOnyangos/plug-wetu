import useScreenSize from "@/hooks/useScreenSize";
import { useLocation } from "react-router-dom";
import {
  Navigation,
  BottomNavBar,
  DynamicHelmet,
  AccountBottomNavBar,
  MobileDetailsNavigation,
} from "@/components";

const MessageScreens = () => {
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

export default MessageScreens;
