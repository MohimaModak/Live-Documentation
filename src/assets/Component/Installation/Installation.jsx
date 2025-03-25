import React from 'react';

export default function Installation() {
    return (
        <div className="min-h-screen w-full bg-slate-100 text-black px-6 md:px-12 lg:px-20 py-10">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl font-bold text-left mb-6">
                Installation Guide
            </h1>

            {/* Prerequisites */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4"> Prerequisites</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>🔹 Node.js (Latest LTS version)</li>
                    <li>🔹 npm or yarn (Package Manager)</li>
                </ul>
            </section>

            {/* Installation Steps */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4"> Installation Steps</h2>
                <div className="bg-gray-100 text-slate-900 font-bold p-4 w-max rounded-lg text-sm">
                    <div>
                       <h1 className='mb-4'># Clone the repository</h1> 
                       <h1 className='mb-4'> git clone https://github.com/MohimaModak/Multi-Demo-Project</h1> 
                         
                        <h1 className='mb-4'># Navigate to the project folder</h1> 
                       <h1 className='mb-4'>Multi-Demo-Project</h1>  
                         
                        <h1 className='mb-4'># Install dependencies</h1> 
                        <h1 className='mb-4'>npm install  # or  yarn install</h1> 
                         
                        <h1 className='mb-4'># Start the development server</h1> 
                        <h1 className='mb-4'>npm run dev  # or  yarn dev</h1> 
                         
                       <h1 className='mb-4'>Localhost: http://localhost:5173</h1>  
                    </div>
                </div>
            </section>

            <section className="">
                <p className="text-gray-800 text-left">
                    After running the above commands, open
                    <a href="http://localhost:5173" className="text-blue-500 font-semibold">
                        {' '}http://localhost:5173
                    </a>{' '}
                    in your browser to see the app in action!
                </p>
            </section>
        </div>
    );
}
