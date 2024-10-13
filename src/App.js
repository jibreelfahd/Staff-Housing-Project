import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

//STAFF PAGES
import LandingPage from "../src/components/Staff Pages/Landing Page/LandingPage";
import ApplicationForm from "../src/components/Staff Pages/Application Page/ApplicationForm";
import MaintenanceForm from '../src/components/Staff Pages/Maintenance Page/MaintenanceForm';
import RetirementForm from "../src/components/Staff Pages/Retirement Page/RetirementForm";

//ADMIN PAGES
import Dashboard from "./components/Admin Pages/Dashboard/Dashboard";
import DashboardDetails from "./components/Admin Pages/Dashboard/DashboardDetails";
import ApplicationPage from "./components/Admin Pages/ApplicationPage/ApplicationPage";
import MaintenancePage from "./components/Admin Pages/MaintenancePage/MaintenancePage";
import RetirementPage from "./components/Admin Pages/RetirementPage/RetirementPage";
/*
import Login from "./components/Admin Pages/Login/Login";
import OccupiedApartment from "./components/Admin Pages/ApartmentDetails/OccupiedApartment/OccupiedApartment";
import VacantApartment from './components/Admin Pages/ApartmentDetails/VacantApartment/VacantApartment';
import DilapidatedApartment from "./components/Admin Pages/ApartmentDetails/DilapidatedApartment/DilapidatedApartment";
import ApplicationPageResponse from "./components/Admin Pages/ApplicationPage/ApplicationPageResponse";
import AllocationPage from "./components/Admin Pages/ApplicationPage/AllocationPage";
*/

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/request/application", element: <ApplicationForm /> },
  { path: "/request/maintenance", element: <MaintenanceForm /> },
  { path: "/request/retirement", element: <RetirementForm /> },
  { path: '/admin/dashboard', element: <Dashboard /> },
  { path: '/admin/dashboard/house/details', element: <DashboardDetails />},
  { path: '/admin/request/application', element: <ApplicationPage /> },
  { path: '/admin/request/maintenance', element: <MaintenancePage /> },
  { path: '/admin/request/retirement', element: <RetirementPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
