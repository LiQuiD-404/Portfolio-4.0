import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Explorer from './components/Explorer'
import MainPanel from './components/MainPanel'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <div className='flex'>
        <Sidebar />
        <Explorer />
        <MainPanel />
      </div>
      
    </>
  )
}

export default App
