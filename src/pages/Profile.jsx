import React from 'react'

const Profile = () => {
  return (
    <div className='maincontent no-scrollbar h-screen overflow-y-scroll text-white p-8 pb-36'>
      <div className=' heading codefont text-xl w-full'>
        Some of my <span className='bg-indigo-500 px-1 text-slate-900'>Achievements</span>
      </div>
      <div className='flex flex-wrap pt-11 gap-5 justify-center'>
        <div className="container1 codefont h-fit sm:h-56 border   w-72 border-indigo-500 bg-[#1a1e22] rounded-lg p-4">
          <span className='text-indigo-500 mb-16'>#5 Most Active Contributor</span>
          <div className='text-sm text-gray-400'>
            <div className='desc pt-2'><span className='border-b border-indigo-500'>5th most active contributor in GSSoC'22</span>. Contributed to 10+ different projects, worked on more than <span className='border-b border-indigo-500'>88 issues</span> and made <span className='border-b border-indigo-500'>70+ PRs</span>  in the span of three months.</div>
          </div>
        </div>
        <div className="container1 codefont h-fit sm:h-56 border   w-72 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 ">
          <span className='text-indigo-500'>Winner of Web3 World Championship</span>
          <div className='text-sm text-gray-400'>
            <div className='desc pt-2'><span className='border-b border-indigo-500'>Winner of Web3 World Championship</span> hosted by Nervos Network. Made and deployed an original NFT on the Nervos Marketplace.</div>
          </div>
        </div>
        <div className="container1 codefont h-fit sm:h-56 border   w-72 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 ">
          <span className='text-indigo-500'>Github Stats</span>
          <div className='text-sm text-gray-400'>
            <div className='desc pt-2'>Made 10+ projects in the last year.<span className='border-b border-indigo-500'>Wrote more than 20,000 lines of code</span> in languages lke JavaScript, TailwindCSS and React.js</div>
          </div>
        </div>
        <div className="container1 codefont h-fit sm:h-56 border   w-72 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 ">
          <span className='text-indigo-500'>Leetcode Stats</span>
          <div className='text-sm text-gray-400'>
            <div className='desc pt-2'><span className='border-b border-indigo-500'>Solved 120+ questions</span> on Leetcode. Attained current rating of 1421</div>
          </div>
        </div>
        <div className="container1 codefont h-fit sm:h-56 border   w-72 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 ">
          <span className='text-indigo-500'>Competitive Coding Stats</span>
          <div className='text-sm text-gray-400'>
            <div className='desc pt-2'><span className='border-b border-indigo-500'>Solved 100+ questions on GeeksforGeeks</span>. 3 star on Codechef. Attained Global Rank: 989 in March Long One 2022, Division 3.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
