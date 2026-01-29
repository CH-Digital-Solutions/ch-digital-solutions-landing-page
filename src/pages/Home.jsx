import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/hero'
import Services from '../components/home/Services'
import Work from '../components/home/Work'
import Contact from '../components/home/contact'

function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Contact />
    </>
  )
}

export default home