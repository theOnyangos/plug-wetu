import React from "react";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BottomDrawer from "./BottomDrawer";

const AccountBottomNavBar = () => {
  const isMobile = useScreenSize();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const drawerHeight = "100%";
  const [isCreateAdDrawerOpen, setCreateAdDrawerOpen] = React.useState(false);

  const handleToggleCreateAdDrawer = () => {
    setCreateAdDrawerOpen(!isCreateAdDrawerOpen);
  };

  return (
    <>
      {isMobile && (
        <div
          className={`items-center justify-center bottom-nav-bar bg-white dark:text-slate-300 dark:bg-darken border-t dark:border-slate-800 z-20`}
        >
          {/* Home Feeds */}
          <Link
            to="/"
            className={`${
              pathname === "/" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="home-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
            </div>
          </Link>

          {/* Favorites */}
          <div
            onClick={() => navigate("/favorites")}
            className={`${
              pathname === "/favorites" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="heart-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
            </div>
          </div>

          {/* Add Ads */}
          <div
            onClick={handleToggleCreateAdDrawer}
            className={` text-white flex justify-center items-center rounded-full mx-3`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="add-circle-outline"
                style={{ fontSize: "55px", color: "#014adc" }}
                className="dark:text-slate-100"
              ></ion-icon>
            </div>
          </div>

          {/* Messages */}
          <Link
            to="/messages"
            className={`${
              pathname === "/messages" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center relative">
              <ion-icon
                name="chatbox-ellipses-outline"
                style={{ fontSize: "35px" }}
                className="dark:text-slate-100"
              ></ion-icon>
              <span className="absolute -top-1 right-1 text-center w-5 h-5 rounded-full bg-red-500 text-sm text-white">
                0
              </span>
            </div>
          </Link>

          {/* Account */}
          <Link
            to="/account"
            className={`${
              pathname === "/account" ? "bg-primary text-white" : ""
            } p-3 flex-1`}
          >
            <div className="flex justify-center items-center">
              <ion-icon
                name="person-circle-outline"
                style={{
                  fontSize: "35px",
                }}
              ></ion-icon>
            </div>
          </Link>
        </div>
      )}

      {/* Ads Drawer */}
      <BottomDrawer
        isOpen={isCreateAdDrawerOpen}
        onClose={handleToggleCreateAdDrawer}
        height={drawerHeight}
      >
        {/* Ads */}
        <div className="w-full p-3 border-b dark:border-slate-700">
          <h1 className="text-lg text-dark font-semibold dark:text-cyan-500">
            Create Ad
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-300">
            Create an Ad to promote your business.
          </p>
        </div>
      </BottomDrawer>
    </>
  );
};

export default AccountBottomNavBar;
