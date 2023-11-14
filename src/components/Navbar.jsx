import React from 'react'
import vscode_icon from '../assets/vscode_icon.svg'
import search from '../assets/search.png'
import more from '../assets/more.png'

const Navbar = () => {
    return (
        <div>
            <nav className='overflow-hidden flex items-center justify-between px-3 p-1 text-[0.85rem] py-1 bg-[#1f2428] text-white border border-[#15191b]'>
                <ol className='hidden sm:flex gap-4 items-center'>
                    <li><img className='h-4 pl-1' src={vscode_icon} alt="vscode" /></li>
                    <li className=' cursor-pointer'>File</li>
                    <li className=' cursor-pointer'>Edit</li>
                    <li className=' cursor-pointer'>View</li>
                    <li className=' cursor-pointer'>Go</li>
                    <li className=' cursor-pointer'>Run</li>
                    <li className=' cursor-pointer'>Terminal</li>
                    <li className=' cursor-pointer'><img className='h-5' src={more} alt="" /></li>
                </ol>
                <ol className='flex sm:hidden'>
                    <li><img className='h-4 pl-1' src={vscode_icon} alt="vscode" /></li>
                </ol>
                <div className='border flex items-center border-gray-700 px-2 sm:px-8 rounded-md'><img className='h-5 px-1' src={search} alt="" /> Shubham - Visual Studio Code</div>
                <ol className='flex gap-2 sm:pr-4 items-center'>
                    <li className='h-3 w-3 rounded-lg bg-[#FFBD44] bg'></li>
                    <li className='h-3 w-3 rounded-lg bg-[#00CA4E]'></li>
                    <li className='h-3 w-3 rounded-lg bg-[#FF605C]'></li>
                </ol>
            </nav>
        </div>
    )
}

export default Navbar
