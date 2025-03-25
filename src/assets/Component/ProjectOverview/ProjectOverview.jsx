import React from 'react';

export default function ProjectOverview() {
    return (
        <div className="h-screen overflow-y-auto w-full bg-slate-100 text-slate-800">
        <div className="p-12">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">Kal React Landing Page</h1>

            <p className="text-lg text-slate-800 leading-relaxed">
                Kal React Landing Page is a sleek and modern <strong>React-based</strong> template,
                meticulously crafted with <strong>Tailwind CSS</strong> and <strong>Core CSS</strong> to ensure
                exceptional performance and seamless responsiveness.
            </p>

            <p className="text-lg text-slate-800 leading-relaxed mt-4">
                Featuring <strong>five fully responsive demo projects</strong>, Kal is designed to cater to various industries,
                providing a <span className="text-blue-600 font-semibold">clean UI</span>, <span className="text-blue-600 font-semibold">fast loading speeds</span>,
                and an <span className="text-blue-600 font-semibold">outstanding user experience</span>.
            </p>
            <div className='mt-4 font-bold'>
                <h1 className='cursor-pointer mb-5'>Live Demo: https://multi-demo-project-xf8e.vercel.app/</h1>
                <h1 className='cursor-pointer'>GitHub Repository: https://github.com/MohimaModak/Multi-Demo-Project</h1>
            </div>
        </div>
        </div>
    );
}
