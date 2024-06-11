import { createBrowserRouter, Navigate } from "react-router-dom";

import Admin from "./layouts/Admin";
import OpenRoutes from "./layouts/OpenRoutes";
import ProtectedRoute from "../src/components/ProtectedRoute";

import {
  CartScreen,
  HomeScreen,
  LoginScreen,
  AccountScreen,
  MessageScreen,
  NotFoundScreen,
  BusinessScreen,
  FavoritesScreen,
  DashboardScreen,
  NotificationScreen,
  ProductRatingScreen,
  ProductDetailsScreen,
  AdminDashboardScreen,
  CategoryProductsScreen,
} from "@/views";

const routes = [
  {
    path: "/",
    element: <OpenRoutes />,
    children: [
      { path: "/", element: <HomeScreen /> },
      { path: "product-details/:slug", element: <ProductDetailsScreen /> },
      { path: "cart", element: <CartScreen /> },
      { path: "product-rating/:productId", element: <ProductRatingScreen /> },
      { path: "category-products/:slug", element: <CategoryProductsScreen /> },
      { path: "auth-register", element: <Navigate to="/auth-login" /> },
      { path: "notification", element: <NotificationScreen /> },
      { path: "auth-login", element: <LoginScreen /> },
    ],
  },
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "user-dashboard",
        element: <ProtectedRoute element={<DashboardScreen />} />,
      },
      { path: "account", element: <AccountScreen /> },
      { path: "business", element: <BusinessScreen /> },
      { path: "favorites", element: <FavoritesScreen /> },
      { path: "messages", element: <MessageScreen /> },
    ],
  },
  {
    path: "/admin-dashboard",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <ProtectedRoute element={<AdminDashboardScreen />} />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundScreen />,
  },
];

const router = createBrowserRouter(routes);

export default router;
