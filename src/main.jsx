import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import CarDetails from "./pages/CarDetails.jsx";
import Cars from "./pages/Cars.jsx";
import AddCar from "./pages/AddCar.jsx";
import Settings from "./pages/Settings.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard" /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/car-details/:id", element: <CarDetails /> },
  { path: "/cars", element: <Cars /> },
  { path: "/add-car", element: <AddCar /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/settings", element: <Settings /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
