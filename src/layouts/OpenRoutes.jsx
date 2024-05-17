import React from "react";
import { Outlet } from "react-router-dom";
import { reviews } from "../data/StaticData";
import ReviewPopup from "../components/utils/ReviewPopup";

const OpenRoutes = () => {
  return (
    <div className="">
      <Outlet />
      <ReviewPopup reviews={reviews} />
    </div>
  );
};

export default OpenRoutes;
