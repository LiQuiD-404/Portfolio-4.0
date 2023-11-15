import React from 'react'
import '../index.css'
import react from '../assets/react.png'
import js from '../assets/js.png'
import html from '../assets/html.png'
import figma from '../assets/figma.png'
import css from '../assets/css.png'
import tailwindcss from '../assets/tailwindcss.png'
import bootstrap from '../assets/bootstrap.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import python from '../assets/python.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import sql from '../assets/sql.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import ps from '../assets/ps.png'
import premiere from '../assets/premiere.png'
import canva from '../assets/canva.png'
import ae from '../assets/ae.png'
import npm from '../assets/npm.png'
import gsap from '../assets/gsap.svg'

const Test1 = () => {
  return (
    <div>
      <div className='maincontent no-scrollbar h-screen overflow-y-scroll text-white p-8'>
        <div className='flex flex-wrap items-center justify-around'>
          <div className=' heading codefont text-2xl w-1/2'>
            Building <span className='border-b-2 border-indigo-500 text-2xl pt-4'>creative</span> solutions <br />
            <span className='text-lg text-gray-300'>using the most in-demand technology</span>
          </div>
          <div className='flex flex-col space-y-1'>
            <div className="container1 codefont h-20 border  w-60  border-indigo-500 bg-[#1a1e22] rounded-lg p-4">
              Web Development framework & tools
            </div>
            <div className="container1 h-56   w-60 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-5">
              <div className='flex flex-wrap gap-2'>
                <img src={html} className='h-11' alt="" />
                <img src={css} className='h-11' alt="" />
                <img src={js} className='h-11' alt="" />
                <img src={tailwindcss} className='h-11' alt="" />
                <img src={bootstrap} className='h-11' alt="" />
                <img src={react} className='h-11' alt="" />
                <img src={figma} className='h-11' alt="" />
                <img src={gsap} className='h-11' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center justify-around mb-10'>
          <div className="container1 codefont h-fit sm:h-60 border   w-60 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 sm:mb-32">
            Programming languages

            <div className='flex flex-wrap gap-2 pt-2'>
              <img src={c} className='h-11' alt="" />
              <img src={cpp} className='h-11' alt="" />
              <img src={java} className='h-11' alt="" />
              <img src={python} className='h-11' alt="" />

            </div>

          </div>

          <div className="container1 h-fit sm:h-72 codefont  w-1/2 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-5 mt-3">
            Version Control & Backend

            <div className='flex flex-wrap gap-2 pt-2'>
                <img src={git} className='h-11' alt="" />
                <img src={github} className='h-11' alt="" />
                <img src={sql} className='h-11' alt="" />
                <img src={mongo} className='h-11' alt="" />
                <img src={node} className='h-11' alt="" />
                <img src={npm} className='h-11' alt="" />
                
              </div>

          </div>
        </div>
        <div className='flex flex-row-reverse flex-wrap items-center justify-around mb-20'>
          <div className="container1 codefont h-fit sm:h-72 border w-60 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 sm:mb-32">
            Video Editing & Photoshop

            <div className='flex flex-wrap gap-2 pt-2'>
                <img src={premiere} className='h-11' alt="" />
                <img src={ps} className='h-11' alt="" />
                <img src={ae} className='h-11' alt="" />
                <img src={canva} className='h-11' alt="" />
                              
              </div>
            
              </div>

          <div className="container1 h-fit sm:h-72 codefont  w-1/2 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-5 mt-3">
            // Updating soon

          </div>
        </div>
      </div>

    </div>
  )
}

export default Test1
