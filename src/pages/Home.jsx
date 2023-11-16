import React from 'react'
import '../index.css'

const Test1 = () => {
  return (
    <div className='maincontent no-scrollbar pb-24 h-screen overflow-y-scroll pt-6 leading-[15vw]'>
      <div className='heading text-white gillroy_medium text-[14vw] pl-[3vw]'>
        Creative
      </div>
      <div className='flex flex-wrap'>
        <div className='heading mazius text-[10vw] pl-16 text-indigo-500'>
          Visual
        </div>
        <div className='relative heading gillroy_medium text-[12vw]  pl-[3vw] text-gray-100'>
          Designer
        
        </div>
      </div>

      <div className='flex pl-[5vw] gap-4 pt-8'>
        <button className='ease-in duration-200 bg-indigo-500 hover:scale-95 scale-90 sm:scale-100 flex items-center justify-center px-5 rounded-md text-sm sm:text-[1rem]'>Download Resume</button>
        <button className='ease-in duration-200 scale-90 sm:scale-100  hover:scale-95 bg-gray-100 h-14 flex items-center justify-center px-5 rounded-md text-sm sm:text-[1rem]'>Get in Touch</button>
      </div>

    </div>
  )
}

export default Test1
