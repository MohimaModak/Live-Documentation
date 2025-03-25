import React from 'react';

export default function Features() {
    return (
        <div className="h-screen overflow-y-auto w-full bg-slate-100 text-black p-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h1>
            
            <ul className="list-none space-y-3 text-lg text-slate-700">
                <li>✅ <strong>Fully Responsive</strong> – Works seamlessly on mobile, tablet, and desktop.</li>
                <li>✅ <strong>Built with React & Tailwind CSS</strong> – Ensures fast and scalable performance.</li>
                <li>✅ <strong>Core CSS Optimization</strong> – Custom styling for enhanced efficiency.</li>
                <li>✅ <strong>High Performance</strong> – Optimized for SEO and quick loading speeds.</li>
                <li>✅ <strong>Reusable Components</strong> – Easy to modify and integrate.</li>
            </ul>
        </div>
    );
}
