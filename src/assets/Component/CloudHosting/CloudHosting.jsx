import React from 'react'
import hosting from "../../Gallery/hosting.png"
import hostSC from "../../Gallery/hostSC.png"

export default function CloudHosting() {
    return (
        <div className=''>
            <div className='h-screen overflow-y-auto w-full bg-slate-100 text-slate-800 px-10 py-16 text-left'>
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">
                        Cloud Hosting
                        - React Landing Page
                    </h1>
                    <section className="mt-8">
                        <p className="text-gray-800 text-lg font-medium max-w-2xl">
                            Our Cloud Hosting Website Template. This template is built using React.js, Vite, and Tailwind CSS, ensuring high performance, responsiveness, and modern design. This documentation will guide you through the setup, customization, and deployment process.</p>
                    </section>
                    <div className='mt-12 text-xl text-left font-bold text-blue-600'>
                        <a href="https://cloud-hosting-dusky.vercel.app/"><h1>Live Demo</h1></a>
                        <a href="https://github.com/MohimaModak/Cloud-Hosting.git"><h1>Git Repository</h1></a>
                    </div>

                    <section className="mt-12">
                        <h2 className="text-3xl font-semibold mb-3 text-left text-blue-600"> Features</h2>
                        <div className="">
                            {[
                                ". Home - Hero section with introduction.",
                                ". Trust - Showcases credibility and trusted partners.",
                                ". Choose - Highlights reasons to choose the service.",
                                ". VPS - Details on Virtual Private Servers (VPS).",
                                ". Security - Information about security features.",
                                ". Pricing - Pricing plans for different services.",
                                ". Testimonial - Client feedback and testimonials.",
                                ". How It Works - Step-by-step process explanation.",
                                ". FAQ - Frequently Asked Questions.",
                                ". Contact - Contact form and details.",
                            ].map((feature, index) => (
                                <div className=''>
                                    <div key={index} className=" my-2 text-left font-bold">
                                        {feature}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className='mt-12'>
                                        <h1 className="text-2xl font-semibold mb-6 text-left text-blue-600">ScreenShort</h1>
                                        <img src={hostSC} className='w-96' />
                                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4 text-left text-blue-600"> Project Structure</h2>
                        <div className='rounded-md'>
                            <img src={hosting} alt="" srcset="" />
                        </div>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-6 text-left text-blue-600">Installation Guide</h2>
                        <div className="text-slate-800 bg-gray-100 w-max p-8 rounded-lg text-left">
                            <div className='font-semibold space-y-4'>
                                <h1># Clone the repository</h1>
                                <h1>git clone https://github.com/MohimaModak/Cloud-Hosting.git</h1>

                                <h1># Navigate to the project folder</h1>
                                <h1>cd cloud-hosting-website
                                </h1>

                                <h1># Install dependencies</h1>
                                <h1> yarn install</h1>

                                <h1># Run the development server</h1>
                                <h1>yarn dev</h1>
                            </div>
                        </div>
                    </section>
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-6 text-left text-blue-600"> Customization</h2>
                        <p className="text-gray-800 font-semibold text-left">
                            All content is managed inside the <code>src/</code> folder. Modify styles via <code>Tailwind CSS</code>.
                        </p>
                        <div className="bg-gray-100 text-slate-800 w-max p-4 rounded-lg font-fold mt-4">

                            <h1 className='font-semibold'># Example - Change colors</h1>
                            <h1 className='font-semibold'>text-blue-500 → text-red-500</h1>
                            <h1 className='font-semibold'> bg-blue-100 → bg-green-200</h1>

                        </div>
                    </section>
                    <section className="mt-12">
                        <h2 className="text-2xl font-semibold mb-6 text-left text-blue-600">Deployment</h2>
                        <p className="text-gray-800 text-left">
                            Recommended: Deploy on <strong>Vercel</strong>. Other options include Netlify, GitHub Pages, and Firebase.
                        </p>
                        <div className='bg-gray-100 p-5 w-max my-4'>
                            <h1 className="text-gray-800 text-left my-2 font-semibold">Deploy on Vercel</h1>
                            <h1 className="text-gray-800 text-left my-2 font-semibold">1. Install Vercel CLI:
                            </h1>
                            <h1 className="text-gray-800 text-left my-2 font-semibold">npm install -g vercel
                            </h1>
                            <h1 className="text-gray-800 text-left my-2 font-semibold">2. Run the following command: vercel
                            </h1>
                        </div>
                    </section>
                    <section className="text-left mt-12">
                        <div className="text-2xl font-semibold mb-6 text-blue-600"> Credits and Attribution</div>
                        <h1 className='mb-2'>Icons:
                            <a target='_blank' href="https://www.flaticon.com/"><span className='font-bold text-blue-600 cursor-pointer'> FlatIcon</span></a></h1>

                        <h1 className='mb-2'>Images:  
                        <a target='_blank' href="https://storyset.com/"><span 
                        className='font-bold text-blue-600 cursor-pointer'>Storyset</span></a></h1>

                    </section>
                    <section className="text-left mt-12">
                        <h2 className="text-2xl font-semibold mb-6 text-blue-600"> Support</h2>
                        <p className="text-gray-800">
                            For any queries, feel free to contact us at:
                        </p>
                        <a href="mailto:mmodak550@gmail.com" className="text-blue-600 font-semibold">
                            mmodak550@gmail.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    )
}
