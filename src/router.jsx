import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "./layouts/Admin";
import OpenRoutes from "./layouts/OpenRoutes";

import {
  Cart,
  Login,
  Landing,
  ProductDetail,
} from "./views/frontend/index.mjs";
import { Dashboard as AdminDashboard } from "./views/admin";
import { Dashboard as ClientDashboard } from "./views/client";
import { Dashboard as VendorDashboard } from "./views/vendor";

import NotFound from "./views/NotFound";

const router = createBrowserRouter([
  {
    // OPEN ROUTES
    path: "/",
    element: <OpenRoutes />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      { path: "/product-details/:slug", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/auth-login",
        element: <Login />,
      },
    ],
  },
  {
    // CLIENT ROUTES
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/user-dashboard",
        element: <ClientDashboard to="/user-dashboard" />,
      },
    ],
  },
  {
    // ADMIN ROUTES
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/admin-dashboard",
        element: <AdminDashboard to="/admin-dashboard" />,
      },
    ],
  },
  {
    // ORGANIZERS ROUTES
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "/vendor-dashboard",
        element: <VendorDashboard to="/vendor-dashboard" />,
      },
    ],
  },
  {
    // Link to the 404 page
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
