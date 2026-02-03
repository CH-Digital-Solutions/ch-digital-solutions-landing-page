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
      <section id='services' ><Services/></section>
      <section id='work'><Work /></section>
      <section id='contact'><Contact /></section>
      </div>
    </>
  )
}

export default Home