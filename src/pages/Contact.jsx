import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <div className='maincontent text-white p-8'>
      <div className='flex flex-wrap'>
        <div className=' heading lg:border-r-2 border-indigo-500 codefont text-xl w-full lg:w-1/2 h-[50vh] sm:h-[80vh]'>
          Reach Out Via Socials
          <div className='flex pt-5 text-lg'>
            <div className=''>
              <ol className='text-gray-500 w-5 pr-8'>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ol>
            </div>
            <div className='px-2'>
            <span className='text-indigo-500'>.socials</span> &#123; <br />
              <div className='pl-8'>
              website: <span className='text-indigo-500 hover:underline cursor-pointer'><a href="https://shubhh.vercel.app/" target='_blank'>shubhh.vercel.app;</a></span> <br />
              email: <span className='text-indigo-500 hover:underline cursor-pointer'><a href="mailto:shubhamsingh.exe@gmail.com">shubhamsingh.exe@gmail.com;</a></span> <br />
              github: <span className='text-indigo-500 hover:underline cursor-pointer'><a href="https://github.com/LiQuiD-404" target='_blank'>LiQuiD-404;</a></span> <br />
              linkedin: <span className='text-indigo-500 hover:underline cursor-pointer'><a href="https://www.linkedin.com/in/shubbh/" target='_blank'>shubbh;</a></span> <br />
              twitter: <span className='text-indigo-500 hover:underline cursor-pointer'><a href="https://twitter.com/shubbh_" target='_blank'>shubbh_;</a></span> <br />
              instagram: <span className='text-indigo-500 hover:underline cursor-pointer'>_shubhistic_;</span> <br />

              
              </div>
              &#125;
            </div>
          </div>
        </div>
        <div className='heading pl-5 codefont text-xl  w-full lg:w-1/2 h-[50vh] sm:h-[80vh]'>
          Or Fill Out This Form
        </div>
      </div>
    </div>
  );
};

export default Contact;
