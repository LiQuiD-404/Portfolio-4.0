import React, { useState } from 'react'
import folder from '../assets/folder.png'
import react_icon from '../assets/react_icon.svg'
import json from '../assets/json_icon.svg'
import js from '../assets/js_icon.svg'
import css from '../assets/css_icon.svg'
import md from '../assets/markdown_icon.svg'
import more from '../assets/more.png'
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../activeSlice'

const Explorer = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.active.active) ||  'file' 
  const [activeTab, setActiveTab] = useState('file'); 
  const changeActive = (tab) => {
    setActiveTab(tab);
    dispatch(setActive(tab));

  };

  const getOpacity = (tab) => (state === tab ? 'border-l border-indigo-500 bg-[#24292e] ' : '');

  return (
    <div className='hidden sm:block w-[15em] bg-[#1f2428] overflow-hidden'>
      <div className='heading text-white text-[0.78rem] py-2 px-3 font-normal tracking-wider flex items-baseline justify-between'>EXPLORER <img className='h-3' src={more} alt="" /></div>
      <div className='heading text-white text-[0.80rem] py-2 px-3 font-medium tracking-wider flex items-center gap-1'><img className='h-5' src={folder} alt="" /> PORTFOLIO</div>
      <div className='subfolder ml-5 border-l border-gray-600 text-white text-[0.85rem]'>
        <ol className='flex flex-col'>
          <li onClick={() => changeActive('file')} className={`${getOpacity('file')} py-1 cursor-pointer flex items-center px-2 hover:bg-[#2c3138]`}><img className='h-4 pr-2' src={react_icon} alt="" /> home.jsx</li>
          <li onClick={() => changeActive('github')} className={`${getOpacity('github')} py-1 cursor-pointer flex items-center px-2 hover:bg-[#2c3138]`}><img className='h-4 pr-2' src={js} alt="" /> skills.js</li>
          <li onClick={() => changeActive('code')} className={`${getOpacity('code')} py-1 cursor-pointer flex items-center px-2 hover:bg-[#2c3138]`}><img className='h-4 pr-2' src={json} alt="" /> projects.json</li>
          <li onClick={() => changeActive('gmail')} className={`${getOpacity('gmail')} py-1 cursor-pointer flex items-center px-2 hover:bg-[#2c3138]`}><img className='h-4 pr-2' src={css} alt="" /> contact.css</li>
          <li onClick={() => changeActive('message')} className={`${getOpacity('message')} py-1 cursor-pointer flex items-center px-2 hover:bg-[#2c3138]`}><img className='h-5 pr-1' src={md} alt="" /> about.md</li>
        </ol>
      </div>
    </div>
  )
}

export default Explorer
