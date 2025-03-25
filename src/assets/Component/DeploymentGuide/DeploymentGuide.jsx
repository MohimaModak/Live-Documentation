import React from "react";

export default function DeploymentGuide() {
  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-800 p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Deployment Guide</h1>

      {/* Vercel Deployment Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Deploy on Vercel</h2>
        <p className="my-3 font-bold">Install Vercel CLI:</p>
        <code className="inline-block bg-gray-200 text-slate-800 p-2 rounded mb-2">
          npm install -g vercel
        </code>
        <p className="my-3 font-bold">Run the following command:</p>
        <code className="inline-block bg-gray-200 text-slate-800 p-2 rounded mb-2">
          vercel
        </code>
        <p>Follow the on-screen instructions to deploy.</p>
      </div>

      {/* Netlify Deployment Section */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Deploy on Netlify</h2>
        <p className="my-3 font-bold">Install Netlify CLI:</p>
        <code className="inline-block bg-gray-200 text-slate-800 p-2 rounded mb-2">
          npm install -g netlify-cli
        </code>
        <p className="my-3 font-bold">Run the deployment command:</p>
        <code className="inline-block bg-gray-200 text-slate-800 p-2 rounded mb-2">
          netlify deploy
        </code>
        <p>Follow the setup to get the live URL.</p>
      </div>
    </div>
  );
}
