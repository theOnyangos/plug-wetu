import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useAuthStore from "@/store/useAuthStore";

const ProtectedRoute = ({ element }) => {
  const { token } = useAuthStore();

  return token ? element : <Navigate to="/auth-login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
