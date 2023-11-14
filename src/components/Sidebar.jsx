import React, { useState } from 'react'
import file from '../assets/file.svg'
import code from '../assets/code.svg'
import gear from '../assets/gear.svg'
import github from '../assets/github.svg'
import profile from '../assets/profile.svg'
import gmail from '../assets/gmail.svg'
import message from '../assets/message.svg'
import { useSelector, useDispatch } from 'react-redux'
import { setActive } from '../activeSlice'

const Sidebar = () => {
  const state = useSelector((state) => state.active.active) ||  'file' 
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('file'); 
  const changeActive = (tab) => {
    setActiveTab(tab);
    dispatch(setActive(tab));

  };

  const getOpacity = (tab) => (state === tab ? 'opacity-100 border-l-2 border-indigo-500 bg-[#202429]' : 'opacity-60');

  return (
    <div className='w-[4em] bg-[#24292e] '>
      <nav className='flex flex-col items-center justify-between h-[95vh]'>
        <ol className='flex-col items-center'>
          <li onClick={() => changeActive('file')} className={`py-3 cursor-pointer ${getOpacity('file')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={file} alt="" />
          </li>
          <li onClick={() => changeActive('github')} className={`py-3 cursor-pointer ${getOpacity('github')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={github} alt="" />
          </li>
          <li onClick={() => changeActive('code')} className={`py-3 cursor-pointer ${getOpacity('code')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={code} alt="" />
          </li>
          <li onClick={() => changeActive('gmail')} className={`py-3 cursor-pointer ${getOpacity('gmail')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={gmail} alt="" />
          </li>
          <li onClick={() => changeActive('message')} className={`py-3 cursor-pointer ${getOpacity('message')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={message} alt="" />
          </li>
        </ol>

        <ol className='flex-col items-center'>
          <li onClick={() => changeActive('profile')} className={`py-3 cursor-pointer ${getOpacity('profile')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={profile} alt="" />
          </li>
          <li onClick={() => changeActive('gear')} className={`py-3 cursor-pointer ${getOpacity('gear')} hover:bg-[#2e343b]`}>
            <img className='h-7 w-16' src={gear} alt="" />
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Sidebar
