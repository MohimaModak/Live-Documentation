import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Sidebar from "./assets/Component/Sidebar/Sidebar";
import ProjectOverview from "./assets/Component/ProjectOverview/ProjectOverview";
import Features from "./assets/Component/Features/Features";
import DemoProjectsOverview from "./assets/Component/DemoProjectsOverview/DemoProjectsOverview";
import HealthCare from "./assets/Component/HealthCare/HealthCare";
import FinanceInvestment from "./assets/Component/FinanceInvestment/FinanceInvestment";
import Restaurant from "./assets/Component/Restaurant/Restaurant";
import CloudHosting from "./assets/Component/CloudHosting/CloudHosting";
import AIPoweredInnovation from "./assets/Component/AIPoweredInnovation/AIPoweredInnovation";
import Installation from "./assets/Component/Installation/Installation";
import CustomizationGuide from "./assets/Component/CustomizationGuide/CustomizationGuide";
import DeploymentGuide from "./assets/Component/DeploymentGuide/DeploymentGuide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/Sidebar",
        element: <Sidebar></Sidebar>,
      },
      {
        path: "/ProjectOverview",
        element: <ProjectOverview></ProjectOverview>,
      },
      {
        path: "/Features",
        element: <Features></Features>,
      },
      {
        path: "/DemoProjectsOverview",
        element: <DemoProjectsOverview></DemoProjectsOverview>,
      },
      {
        path: "/HealthCare",
        element: <HealthCare></HealthCare>,
      },
      {
        path: "/FinanceInvestment",
        element: <FinanceInvestment></FinanceInvestment>,
      },
      {
        path: "/Restaurant",
        element: <Restaurant></Restaurant>,
      },
      {
        path: "/CloudHosting",
        element: <CloudHosting></CloudHosting>,
      },
      {
        path: "/AIPoweredInnovation",
        element: <AIPoweredInnovation></AIPoweredInnovation>,
      },
      {
        path: "/Installation",
        element: <Installation></Installation>,
      },
      {
        path: "/CustomizationGuide",
        element: <CustomizationGuide></CustomizationGuide>,
      },
      {
        path: "/DeploymentGuide",
        element: <DeploymentGuide></DeploymentGuide>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
