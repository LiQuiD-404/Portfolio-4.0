import React from 'react'
import critique from '../assets/critique.png'
import portfolio from '../assets/portfolio.png'
import reflex from '../assets/reflex.jpg'

const Test1 = () => {
  return (
    <div>
      <div className='maincontent no-scrollbar pb-24 h-screen overflow-y-scroll text-white p-4'>
        <div className='flex flex-row-reverse pt-6 flex-wrap items-center justify-around mb-10'>
        <div className="container1 codefont h-48 sm:h-72 border w-full sm:w-1/3 border-indigo-500 rounded-lg p-4" style={{ backgroundImage: `url(${critique})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          <div className="container1 h-fit codefont w-fit sm:w-1/2 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-3 mt-3">
            <span className='text-indigo-500'>Critique | Movies & Shows</span>
            <div className='text-xs text-gray-400 pb-2'>Tech Stack : React.js | HTML | CSS | JavaScript | SCSS</div>
            <div className='text-sm px-4'>
              <ol className='list-disc'>
              
                <li>A fully responsive React movie app capable of fetching movie and TV show details.</li>
                <li>Used Redux for state management.</li>
                <li>Used SASS for component styling.</li>
                <li>Can fetch details for a particular searched movie or TV show using TMBD API.</li>

              </ol>
            </div>
          </div>
        </div>
        <div className='flex flex-row pt-6 flex-wrap items-center justify-around mb-10'>
          <div className="container1 codefont h-48 sm:h-72 border w-full sm:w-1/3 border-indigo-500 rounded-lg p-4" style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          <div className="container1 h-fit codefont w-fit sm:w-1/2 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-3 mt-3">
            <span className='text-indigo-500'>Personal Portfolio</span>
            <div className='text-xs text-gray-400 pb-2'>Tech Stack : HTML | CSS | JavaScript</div>
            <div className='text-sm px-4'>
              <ol className='list-disc'>
              



                <li>Designed a dynamic Portfolio to showcase diverse range of projects and skills.</li>
                <li>Used GSAP and ScrollTrigger to implement seamless transitions animations.</li>
                <li>Used locomotive.js to implement butter smooth scroll.</li>

              </ol>
            </div>
          </div>
        </div>

        <div className='flex flex-row-reverse pt-6 flex-wrap items-center justify-around mb-10'>
        <div className="container1 codefont h-48 sm:h-72 border w-full sm:w-1/3 border-indigo-500 rounded-lg p-4" style={{ backgroundImage: `url(${reflex})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>

          <div className="container1 h-fit codefont w-fit sm:w-1/2 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-3 mt-3">
            <span className='text-indigo-500'>Reflex - Aim Trainer</span>
            <div className='text-xs text-gray-400 pb-2'>Tech Stack : HTML | TailwindCSS | JavaScript</div>
            <div className='text-sm px-4'>
              <ol className='list-disc'>
              
                <li>Developed an interactive JavaScript-based aim trainer game.</li>
                <li>Utilized GSAP for seamless and fluid animations, enhancing user engagement.</li>
                <li>Has customization options, allowing users to adjust settings like target size, target colour, etc</li>

              </ol>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Test1
