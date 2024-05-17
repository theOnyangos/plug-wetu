import React, { useEffect, useState } from "react";
import DynamicHelmet from "../../components/DynamicHelmet";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import Navigation from "../../components/utils/Navigation";
import BottomNavBar from "../../components/utils/BottomNavBar";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut, BiNotification, BiSolidFolder } from "react-icons/bi";
import ThemeChanger from "../../components/ThemeChanger";
import { FaBriefcase, FaUsers, FaUserGear } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import Footer from "../../components/utils/Footer";
import AccountBottomNavBar from "../../components/utils/AccountBottomNavBar";
import BottomDrawer from "../../components/utils/BottomDrawer";

const Accounts = () => {
  const isMobile = useScreenSize();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const drawerHeight = "100%";
  const [isFollowersDrawerOpen, setFollowersDrawerOpen] = React.useState(false);
  const [isAccountSettingsDrawerOpen, setAccountSettingsDrawerOpen] =
    React.useState(false);
  const [isBusinessSettingsDrawerOpen, setBusinessSettingsDrawerOpen] =
    React.useState(false);
  const [isOrdersDrawerOpen, setOrdersDrawerOpen] = React.useState(false);
  const [isNotificationsDrawerOpen, setNotificationsDrawerOpen] =
    React.useState(false);

  const handleToggleFollowersDrawer = () => {
    setFollowersDrawerOpen(!isFollowersDrawerOpen);
  };

  const handleToggleAccountSettingsDrawer = () => {
    setAccountSettingsDrawerOpen(!isAccountSettingsDrawerOpen);
  };

  const handleToggleBusinessSettingsDrawer = () => {
    setBusinessSettingsDrawerOpen(!isBusinessSettingsDrawerOpen);
  };

  const handleToggleOrdersDrawer = () => {
    setOrdersDrawerOpen(!isOrdersDrawerOpen);
  };

  const handleToggleNotificationsDrawer = () => {
    setNotificationsDrawerOpen(!isNotificationsDrawerOpen);
  };

  return (
    <React.Fragment className="pb-20">
      <DynamicHelmet
        title="Plug Wetu - User Accounts."
        description="Manage all your businesses, orders, and account settings."
      />

      {/* Navigation */}
      {isMobile ? (
        <MobileDetailsNavigation title={"Account"} />
      ) : (
        <Navigation />
      )}

      {/* Account Profile */}
      <section className="flex flex-col items-center justify-center relative">
        <div className="border-b w-full pb-3 border-gray-300 dark:border-slate-700 bg-white dark:bg-dark">
          <div className="flex flex-col items-center justify-center mt-5 rounded-md">
            <div className="w-[150px] h-[150px] rounded-full shadow-md border dark:bg-white/50 mb-3">
              <img
                src="/images/profile-avatar.png"
                alt="Profile"
                className=""
              />
            </div>

            <h1 className="text-xl text-primary font-semibold dark:text-cyan-500">
              Emmaculate Onyango
            </h1>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              johndoe@gmail.com
            </p>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              Join Date: 28th May, 2021
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="absolute top-3 right-3">
          <button className="flex gap-2 justify-center items-center px-3 py-2 bg-darken text-slate-100 rounded-md text-sm dark:border dark:border-slate-700 dark:text-slate-200">
            {" "}
            <BiLogOut className="text-base" /> Logout
          </button>
        </div>
      </section>

      {/* Dashboard */}
      <section className="px-5 pb-20 md:container md:mx-auto">
        <div className="grid grid-cols-2 gap-5 mt-5">
          {/* My Businesses Link */}
          <Link
            to={""}
            className="bg-white dark:bg-dark rounded-xl shadow-sm p-5 border-t-4 border-t-dark dark:border-t-cyan-500 border dark:border-slate-700 text-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaBriefcase className="text-3xl text-primary dark:text-cyan-500" />
              <h1 className="text-lg text-dark font-semibold dark:text-cyan-500 leading-tight">
                My Businesses
              </h1>
            </div>

            <p className="text-gray-500 text-sm dark:text-slate-300">
              Manage your businesses.
            </p>
          </Link>

          {/* My Followers Link */}
          <div
            onClick={handleToggleFollowersDrawer}
            className="bg-white dark:bg-dark rounded-xl shadow-sm p-5 border-t-4 border-t-dark dark:border-t-cyan-500 border dark:border-slate-700 text-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaUsers className="text-4xl text-primary dark:text-cyan-500" />
              <h1 className="text-lg text-dark font-semibold dark:text-cyan-500 leading-tight">
                My Followers
              </h1>
            </div>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              Manage your followers.
            </p>
          </div>

          {/* Account Settings Link */}
          <div
            onClick={handleToggleAccountSettingsDrawer}
            className="bg-white dark:bg-dark rounded-xl shadow-sm p-5 border-t-4 border-t-dark dark:border-t-cyan-500 border dark:border-slate-700 text-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaUserGear className="text-3xl text-primary dark:text-cyan-500" />
              <h1 className="text-lg text-dark font-semibold dark:text-cyan-500 leading-tight">
                Account Settings
              </h1>
            </div>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              Manage your account settings.
            </p>
          </div>

          {/* Business Settings Link */}
          <div
            onClick={handleToggleBusinessSettingsDrawer}
            className="bg-white dark:bg-dark rounded-xl shadow-sm p-5 border-t-4 border-t-dark dark:border-t-cyan-500 border dark:border-slate-700 text-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <FaCogs className="text-3xl text-primary dark:text-cyan-500" />
              <h1 className="text-lg text-dark font-semibold dark:text-cyan-500 leading-tight">
                Business Settings
              </h1>
            </div>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              Manage your business settings.
            </p>
          </div>

          {/* My Orders Link */}
          <div
            onClick={handleToggleOrdersDrawer}
            to={""}
            className="bg-white dark:bg-dark rounded-xl shadow-sm p-5 border-t-4 border-t-dark dark:border-t-cyan-500 border dark:border-slate-700 text-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <BiSolidFolder className="text-3xl text-primary dark:text-cyan-500" />
              <h1 className="text-lg text-dark font-semibold dark:text-cyan-500 leading-tight">
                My Orders
              </h1>
            </div>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              View your orders.
            </p>
          </div>

          {/* Notifications Link */}
          <div
            onClick={handleToggleNotificationsDrawer}
            className="bg-white dark:bg-dark rounded-xl shadow-sm p-5 border-t-4 border-t-dark dark:border-t-cyan-500 border dark:border-slate-700 text-center cursor-pointer"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <BiNotification className="text-3xl text-primary dark:text-cyan-500" />
              <h1 className="text-lg text-dark font-semibold dark:text-cyan-500 leading-tight">
                Notifications
              </h1>
            </div>
            <p className="text-gray-500 text-sm dark:text-slate-300">
              Manage your notifications.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      {pathname === "/account" ? <AccountBottomNavBar /> : <BottomNavBar />}

      {/* Theme Changer */}
      <ThemeChanger />

      {/* Footer */}
      <Footer />

      {/* Followers Drawer */}
      <BottomDrawer
        isOpen={isFollowersDrawerOpen}
        onClose={handleToggleFollowersDrawer}
        height={drawerHeight}
      >
        {/* Followers */}
        <div className="w-full p-3 border-b dark:border-slate-700">
          <h1 className="text-lg text-dark font-semibold dark:text-cyan-500">
            My Followers
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-300">
            Manage your followers.
          </p>
        </div>
      </BottomDrawer>

      {/* Account Settings Drawer */}
      <BottomDrawer
        isOpen={isAccountSettingsDrawerOpen}
        onClose={handleToggleAccountSettingsDrawer}
        height={drawerHeight}
      >
        {/* Account Settings */}
        <div className="w-full p-3 border-b dark:border-slate-700">
          <h1 className="text-lg text-dark font-semibold dark:text-cyan-500">
            Account Settings
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-300">
            Manage your account settings.
          </p>
        </div>
      </BottomDrawer>

      {/* Business Settings Drawer */}
      <BottomDrawer
        isOpen={isBusinessSettingsDrawerOpen}
        onClose={handleToggleBusinessSettingsDrawer}
        height={drawerHeight}
      >
        {/* Business Settings */}
        <div className="w-full p-3 border-b dark:border-slate-700">
          <h1 className="text-lg text-dark font-semibold dark:text-cyan-500">
            Business Settings
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-300">
            Manage your business settings.
          </p>
        </div>
      </BottomDrawer>

      {/* Orders Drawer */}
      <BottomDrawer
        isOpen={isOrdersDrawerOpen}
        onClose={handleToggleOrdersDrawer}
        height={drawerHeight}
      >
        {/* Orders */}
        <div className="w-full p-3 border-b dark:border-slate-700">
          <h1 className="text-lg text-dark font-semibold dark:text-cyan-500">
            My Orders
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-300">
            View your orders.
          </p>
        </div>
      </BottomDrawer>

      {/* Notifications Drawer */}
      <BottomDrawer
        isOpen={isNotificationsDrawerOpen}
        onClose={handleToggleNotificationsDrawer}
        height={drawerHeight}
      >
        {/* Notifications */}
        <div className="w-full p-3 border-b dark:border-slate-700">
          <h1 className="text-lg text-dark font-semibold dark:text-cyan-500">
            Notifications
          </h1>
          <p className="text-gray-500 text-sm dark:text-slate-300">
            Manage your notifications.
          </p>
        </div>
      </BottomDrawer>
    </React.Fragment>
  );
};

export default Accounts;
