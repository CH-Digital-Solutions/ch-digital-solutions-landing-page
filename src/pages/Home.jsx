import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Work from '../components/home/Work'
import Contact from '../components/home/Contact'

function Home() {
  return (
    <>
    <div className='bg-black'>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
      </div>
    </>
  )
}

export default Home