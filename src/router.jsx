import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "./layouts/Admin";
import OpenRoutes from "./layouts/OpenRoutes";
import ProtectedRoute from "../src/components/ProtectedRoute";

import {
  Cart,
  Login,
  Landing,
  ProductDetail,
  Notifications,
  ProductRating,
  CategoryProductsPage,
} from "./views/frontend";
import { Dashboard as AdminDashboard } from "./views/admin";
import {
  Accounts,
  Dashboard as ClientDashboard,
  MyBusiness,
  MyFavorites,
  Messages,
} from "./views/client";

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
      { path: "/product-rating/:productId", element: <ProductRating /> },
      { path: "/category-products/:slug", element: <CategoryProductsPage /> },
      {
        path: "/auth-register",
        element: <Navigate to="/auth-login" />,
      },
      {
        path: "/notification",
        element: <Notifications />,
      },
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
        element: <ProtectedRoute element={<ClientDashboard />} />,
      },
      {
        path: "/account",
        element: <Accounts />,
      },
      {
        path: "/business",
        element: <MyBusiness />,
      },
      {
        path: "/favorites",
        element: <MyFavorites />,
      },
      {
        path: "/messages",
        element: <Messages />,
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
        element: <ProtectedRoute element={<AdminDashboard />} />,
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
