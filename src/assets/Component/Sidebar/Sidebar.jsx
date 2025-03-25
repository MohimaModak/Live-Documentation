import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const [showDemoLinks, setShowDemoLinks] = useState(false);

    return (
        <div className="h-screen overflow-y-auto w-64 bg-slate-100 text-black shadow-2xl p-4 relative">
            <NavLink to="/" className="block py-3 hover:text-blue-600 font-bold pt-16">
                Project Overview
            </NavLink>

            <NavLink to="/Features" className="block py-3 hover:text-blue-600 font-bold">
                Features
            </NavLink>

            
            <div className="relative">
                <NavLink
                    to="/DemoProjectsOverview"
                    className="block py-3 hover:text-blue-600 font-bold relative"
                    onClick={(e) => {
                        e.preventDefault(); // Prevents navigation
                        setShowDemoLinks(!showDemoLinks);
                    }}
                >
                    Demos Overview
                </NavLink>

                {showDemoLinks && (
                    <div className="absolute left-0 w-48 bg-gray-200 p-2 rounded shadow-lg z-10">
                        <NavLink to="/HealthCare" className="block py-1 hover:text-blue-600 font-bold">
                            Health Care
                        </NavLink>
                        <NavLink to="/FinanceInvestment" className="block py-1 hover:text-blue-600 font-bold">
                            Finance Investment
                        </NavLink>
                        <NavLink to="/Restaurant" className="block py-1 hover:text-blue-600 font-bold">
                            Restaurant
                        </NavLink>
                        <NavLink to="/AIPoweredInnovation" className="block py-1 hover:text-blue-600 font-bold">
                            AI-Powered Innovation
                        </NavLink>
                        <NavLink to="/CloudHosting" className="block py-1 hover:text-blue-600 font-bold">
                            Cloud Hosting
                        </NavLink>
                    </div>
                )}
            </div>

            <NavLink to="/Installation" className="block py-3 hover:text-blue-600 font-bold">
                Installation & Setup
            </NavLink>

            <NavLink to="/CustomizationGuide" className="block py-3 hover:text-blue-600 font-bold">
            Customization Guide
            </NavLink>
            <NavLink to="/DeploymentGuide" className="block py-3 hover:text-blue-600 font-bold">
            Deployment Guide
            </NavLink>
        </div>
    );
}
