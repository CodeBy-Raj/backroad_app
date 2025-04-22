import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Services from './component/Services'
import About from './component/About'
import Tours from './component/Tours'
import Footer from './component/Footer'

const  App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Tours/>
      <About/>
      <Footer/>
      
    </div>
  )
}

export default App
