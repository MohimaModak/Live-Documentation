import React from 'react'

export default function ProjectStructure() {
    return (
        <div className='h-screen overflow-y-auto w-full bg-white text-black'>
            MY-PROJECT
            │── node_modules/
            │── public/
            │   ├── Gallery/
            │   ├── Products.json
            │   ├── vercel.json
            │   ├── vite.svg
            │── src/
            │   ├── assets/
            │   ├── Component/
            │   │   ├── Footer/
            │   │   ├── Home/
            │   │   ├── MultiProject/
            │   ├── Gallery/
            │   ├── App.css
            │   ├── App.jsx
            │   ├── index.css
            │   ├── main.jsx
            │   ├── Root.jsx
            │── .gitignore
            │── eslint.config.js
            │── index.html
            │── package-lock.json
            │── package.json
            │── postcss.config.js
            │── README.md
            │── tailwind.config.js
            │── vite.config.js
            │── yarn.lock
        </div>
    )
}
