import React from 'react'
import branch from '../assets/branch.png'
import cross from '../assets/cross.png'
import error from '../assets/error.png'
import bell from '../assets/bell.png'
import tick from '../assets/tick.png'
import curly from '../assets/curly.png'
import radar from '../assets/radar.png'


const Footer = () => {
    return (
        <div className='footer pointer-events-none absolute font-light text-[0.2rem] z-50 w-full right-0 bottom-0 bg-[#1f2428] border-t border-[#15191b] pt-1'>
            <div className='flex justify-between px-3'>
                <div className='flex text-[0.2rem]'>
                    <div className=' h-full flex text-white items-center text-xs'>
                        <img src={branch} className='h-[0.9rem] px-1' alt="" /> main
                    </div>
                    <div className='flex text-white items-center text-xs pl-3'>
                        <img src={cross} className='h-5' alt="" /> 0
                    </div>
                    <div className='flex text-white items-center text-xs pl-1'>
                        <img src={error} className='h-5' alt="" /> 0
                    </div>
                </div>
                <div className='flex text-[0.2rem] flex-row-reverse gap-2 items-center'>
                    <div className='flex float-right text-white items-center text-xs pl-1'>
                        <img src={bell} className='h-5' alt="" />
                    </div>
                    <div className='flex float-right text-white items-center text-xs pl-1'>
                        <img src={tick} className='h-5' alt="" /> Prettier
                    </div>
                    <div className='flex text-white items-center text-xs pl-1'>
                        <img src={curly} className='h-3 px-1' alt="" /> JavaScript JSX
                    </div>
                    <div className='flex float-right text-white items-center text-xs pl-1'>
                        <img src={radar} className='h-3 px-1' alt="" /> Go Live
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
