import React from 'react'

const About = () => {
  return (
    <div className='maincontent pb-32 no-scrollbar h-screen overflow-y-scroll codefont text-xl text-white p-8'>
      <span className='text-indigo-500 text-xl'>.about</span> &#123; <br />
      <div className='space-y-6'>
        <div className="intro text-lg pl-12 text-gray-400">intro:
          <span className='pl-3 text-white'>
            <span className='border-b-2 border-indigo-500'>Pre-final</span> year CSE student at <span className='border-b-2 border-indigo-500'>Vellore Institute of Technology</span> , proficient in C, C++, Java, and Python. Passionate about creating user-friendly web apps and skilled in HTML, CSS, and JavaScript.
            <br />
            I've participated in several open-source hackathons and currently serve as a  <span className='border-b-2 border-indigo-500'>GeeksforGeeks campus ambassador</span> , mentoring fellow students in their technical journey.
            <br />
            I'm constantly seeking to expand my knowledge and stay updated with the latest industry developments. I enjoy collaborating with peers and mentors to solve challenging problems and deliver high-quality work.
            <br />
            Driven by a desire to make a positive impact through technology, I am eager to embark on a career as a software developer. I am open to new challenges and constantly seek to learn and grow in this dynamic field. If you would like to connect or discuss potential opportunities, please feel free to reach out.
          </span>
        </div>
        <div className='workexp text-lg pl-12 text-gray-400'>work:
          <div className='flex pt-6 flex-wrap items-center justify-around mb-10'>
            <div className="container1 codefont h-fit sm:h-72 border   w-72 border-indigo-500 bg-[#1a1e22] rounded-lg p-4 ">
              <span className='text-indigo-500'>Social Winter of Code</span>
              <div className='text-sm px-4'>
                <ol className='list-disc'>
                  <li>Mentored beginner open-source enthusiasts.</li>
                  <li>Reviewed code and pull requests (PRs) submitted by mentees.</li>
                  <li>Guided mentees in getting familiar with technologies like git and GitHub.</li>
                  <li>Collaborated with other mentors to ensure the success of the program.</li>
                  
                </ol>
              </div>


            </div>

            <div className="container1 h-fit codefont w-fit sm:w-1/2 border border-indigo-500 bg-[#1a1e22] rounded-lg p-4 mb-3 mt-3">
              <span className='text-indigo-500'>GeeksforGeeks</span>
              
              <div className='text-sm px-4'>
                <ol className='list-disc'>
                  <li>Brought in 1600+ participants for Solve for India Hackathon organized by Google Cloud X GeeksForGeeks.</li>
                  <li>Created awareness campaigns about GeeksforGeeks on campus.</li>
                  <li>Organized coding events, workshops, and seminars on my campus.</li>
                  <li>Content Creation over different social media platforms like Quora, LinkedIn.</li>
                  
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      &#125;
    </div>
  )
}

export default About
