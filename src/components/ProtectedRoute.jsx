import React from "react";
import { Navigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const ProtectedRoute = ({ element }) => {
  const { token } = useStateContext();

  return token ? element : <Navigate to="/auth-login" />;
};

export default ProtectedRoute;
