import React from 'react'
import medical from "../../Gallery/medical.png"
import medicalSC from "../../Gallery/medicalSC.png"

export default function HealthCare() {
    return (
        <div className='h-screen overflow-y-auto w-full bg-slate-100 text-slate-800 px-10 py-16 text-left'>
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-600">
                    Health Care - React Landing Page
                </h1>
                <p className="text-lg md:text-xl mt-4">
                    Our Health, Our Priority – Trusted Medical Care You Can Rely On
                </p>
               
                <section className="text-left mb-12 ">
                    <p className="text-gray-800 text-base mt-2 text-left max-w-2xl ">
                        Easily schedule your appointments online and take control of your health.
                        Compassionate, expert care for every stage of life.
                      Book your appointment today!
                    </p>
                </section>
                <div className='mb-12 text-left font-bold text-blue-600 text-xl'>
                    <a href="https://health-care-kappa-ivory.vercel.app/"><h1>Live Demo</h1></a>
                    <a href="https://github.com/MohimaModak/HealthCare/tree/main"><h1>Git Repository</h1></a>
                </div>
                <section className='mb-12'>
                    <h1 className="text-2xl font-semibold mb-6 text-left text-blue-600">ScreenShort</h1>
                    <img src={medicalSC} className='w-96' />
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-left text-blue-600"> Features</h2>
                    <div className="">
                        {[
                            ". Modern & Responsive Design - Fully responsive across all devices.",
                            ". Tailwind CSS - Styled with utility-first Tailwind CSS.",
                            ". Fast & Lightweight - Optimized for performance.",
                            ". Reusable Components - Well-structured and modular components.",
                            ". Medical Services - Includes detailed sections for healthcare services.",
                            ". Appointment Booking - Easy scheduling with a call-to-action.",
                            ". Health Tips Blog - Stay updated with expert health tips.",
                            ". Find a Specialist - Search and choose experienced doctors."
                        ].map((feature, index) => (
                            <div key={index} className="font-bold mb-4 text-slate-800">
                                {feature}
                            </div>
                        ))}
                    </div>
                </section>
               
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-left text-blue-600"> Project Structure</h2>
                    <div className='rounded-md'>
                        <img src={medical} alt="" srcset="" />
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6 text-left text-blue-600"> Sections Overview</h2>
                    <ul className="">
                        {[
                            ". Home - Hero banner with a call-to-action button.",
                            ". About - Information about the hospital's mission and vision.",
                            ". Services - List of medical services offered (e.g., consultations, diagnostics, surgery).",
                            ". Choose Us - Highlights of why patients should choose our hospital.",
                            ". Insurance - Details on accepted insurance plans and payment options.",
                            ". Testimonials - Patient reviews and experiences.",
                            ". Team - Meet our expert doctors and medical professionals.",
                            ". Health Tips - Blog section with health-related articles.",
                            ". Contact - Get in touch via online form, phone, or email."
                        ].map((section, index) => (
                            <div>
                                <li key={index} className="font-semibold text-slate-800 p-3 rounded-lg 
                        text-left">{section}</li>
                            </div>
                        ))}
                    </ul>
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
                <section className="mb-12">
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
                        <a target='_blank' href="https://www.flaticon.com/"><span className='font-bold text-blue-600 cursor-pointer'> FlatIcon</span></a> <a target='_blank' href="https://tabler.io/icons"><span className='font-bold text-blue-600 cursor-pointer'>, Tabler Icons</span></a> </h1>

                    <h1 className='mb-2'>Illustrations:
                        <a target='_blank' href="https://storyset.com/"><span className='font-bold text-blue-600 cursor-pointer'> Storyset</span></a> </h1>
                    <h1 className='mb-2'>Photos:
                        <a target='_blank' href="https://www.pexels.com/"><span className='font-bold text-blue-600 cursor-pointer'> Pexels</span></a> <a target='_blank' href="https://pixabay.com/"><span className='font-bold text-blue-600 cursor-pointer'>, Pixabay</span></a> </h1>
                </section>
                <section className="text-left">
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
    )
}
