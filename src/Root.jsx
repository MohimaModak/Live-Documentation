import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./assets/Component/Sidebar/Sidebar";

export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">

      <div
        id="cursor-effect"
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
      ></div>


      <div
        className={`fixed top-0 left-0 h-full  z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 `}
      >
        <Sidebar />
      </div>


      <button
        className={`absolute top-4 left-4 text-black text-6xl rounded-md md:hidden z-50 ${isSidebarOpen ? "spinning-star" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "=" : "*"}
      </button>

      <div className="flex-1 p-4 bg-white">
        <Outlet />
      </div>
    </div>
  );
}
