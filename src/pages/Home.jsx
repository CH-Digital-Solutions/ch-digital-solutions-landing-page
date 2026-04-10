import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import Services from '../components/home/Services'
import Work from '../components/home/Work'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

function Home() {
  return (
    <>
    <div className='bg-[var(--bg-primary)]'>
      <Navbar />
      <Hero />
      <section id='products'><Products /></section>
      <section id='services' ><Services/></section>
      <section id='work'><Work /></section>
      <section id='contact'><Contact /></section>
      <Footer />
      </div>
    </>
  )
}

export default Home