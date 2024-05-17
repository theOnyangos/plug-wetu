import React, { useEffect, useState } from "react";
import DynamicHelmet from "../../components/DynamicHelmet";
import MobileDetailsNavigation from "../../components/utils/MobileDetailsNavigation";
import Navigation from "../../components/utils/Navigation";
import BottomNavBar from "../../components/utils/BottomNavBar";
import useScreenSize from "../../hooks/useScreenSize.mjs";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";

const Accounts = () => {
  const isMobile = useScreenSize();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="pb-20">
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
      <div className="flex flex-col items-center justify-center relative">
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

          {/* Edit Profile settings */}
          <div className="flex flex-col items-center justify-center mt-5 absolute top-0 right-3">
            <button
              className="bg-darken dark:bg-gray-500 text-white px-3 py-2 rounded-md flex items-center gap-2 text-sm"
              onClick={() => navigate("/account/edit")}
            >
              Edit Profile <BiEditAlt />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar />

      {/* Bottom Navigation */}
      <BottomNavBar />
    </div>
  );
};

export default Accounts;
