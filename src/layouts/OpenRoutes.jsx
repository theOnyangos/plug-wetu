import React from "react";
import { Outlet } from "react-router-dom";
import ReviewPopup from "../components/utils/ReviewPopup";
import { reviews } from "../data/StaticData";

const OpenRoutes = () => {
  return (
    <div className="">
      <Outlet />
      <ReviewPopup reviews={reviews} />
    </div>
  );
};

export default OpenRoutes;
