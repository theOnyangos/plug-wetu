import React from "react";
import { useStateContext } from "../context/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";
import { reviews } from "../data/StaticData";
import ReviewPopup from "../components/utils/ReviewPopup";

const OpenRoutes = () => {
  const { token, user } = useStateContext();

  if (token) {
    return <Navigate to="/admin-dashboard" />;
  }

  return (
    <div className="">
      <Outlet />
      <ReviewPopup reviews={reviews} />
    </div>
  );
};

export default OpenRoutes;
