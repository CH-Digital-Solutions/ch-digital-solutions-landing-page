import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/hero'
import Services from '../components/home/Services'
import Work from '../components/home/Work'

function home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Work />
    </>
  )
}

export default home