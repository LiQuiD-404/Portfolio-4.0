import React from 'react'
import react_icon from '../assets/react_icon.svg'
import json from '../assets/json_icon.svg'
import js from '../assets/js_icon.svg'
import css from '../assets/css_icon.svg'
import md from '../assets/markdown_icon.svg'
import Home from '../pages/Home'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../activeSlice'
import '../../src/index.css'

const MainPanel = () => {
  const state = useSelector((state) => state.active.active) ||  'file' 
  console.log(state);

  return (
    <div className='border-l border-[#15191b] w-full bg-[#24292e]'>
      <div className='mainnav overflow-x-scroll no-scrollbar bg-[#1f2428] text-white text-sm'>
        <ol className='flex'>
          <li id='home' className={`hover:bg-[#2e343b] borderleft cursor-pointer flex items-center px-4 pr-10 sm:pr-4 py-2  ${state === 'file' ? ('border-t border-indigo-500 bg-[#24292e]') : ('')}`}><img className='h-4 pr-2' src={react_icon} alt="" /> home.jsx</li>
          <li id='skills' className={`hover:bg-[#2e343b] borderleft cursor-pointer flex items-center px-4 pr-10 sm:pr-4 py-2  ${state === 'github' ? ('border-t border-indigo-500 bg-[#24292e]') : ('')}`}><img className='h-4 pr-2' src={js} alt="" /> skills.js</li>
          <li id='projects' className={`hover:bg-[#2e343b] borderleft cursor-pointer flex items-center px-4 pr-10 sm:pr-4 py-2  ${state === 'code' ? ('border-t border-indigo-500 bg-[#24292e]') : ('')}`}><img className='h-4 pr-2' src={json} alt="" /> projects.json</li>
          <li id='contact' className={`hover:bg-[#2e343b] borderleft cursor-pointer flex items-center px-4 pr-10 sm:pr-4 py-2  ${state === 'gmail' ? ('border-t border-indigo-500 bg-[#24292e]') : ('')}`}><img className='h-4 pr-2' src={css} alt="" /> contact.css</li>
          <li id='about' className={`hover:bg-[#2e343b] borderleft cursor-pointer flex items-center px-4 pr-10 sm:pr-4 py-2  ${state === 'message' ? ('border-t border-indigo-500 bg-[#24292e]') : ('')}`}><img className='h-5 pr-1' src={md} alt="" /> about.md</li>
        </ol>
      </div>
      {
        state === 'file' ? (<Home />) :
          state === 'github' ? (<Skills />) :
            state === 'code' ? (<Projects />) :
              state === 'gmail' ? (<Contact />) :
                state === 'message' ? (<About />) :
                  state === 'profile' ? (<Profile />) :
                    state === 'gear' ? (<Settings />) :
                      (<></>)
      }

    </div>
  )
}

export default MainPanel
