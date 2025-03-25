import React from 'react';

export default function CustomizationGuide() {
    return (
        <div className="min-h-screen w-full bg-slate-100 text-black px-6 md:px-12 lg:px-20 py-10">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-left mb-6">
                 Customization Guide
            </h1>

            {/* Editing Content */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Editing Content</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>. All text and images are inside the <code className="text-blue-500 font-semibold">src/components/</code> folder.</li>
                    <li>. Images and icons are located in the <code className="text-blue-500 font-semibold">assets/</code> folder.</li>
                </ul>
            </section>

            {/* Styling & Colors */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">2. Styling & Colors</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>. Tailwind CSS classes can be updated directly in JSX files.</li>
                    <li>. Custom colors can be modified in the <code className="text-blue-500 font-semibold">tailwind.config.js</code> file.</li>
                </ul>
            </section>
        </div>
    );
}
