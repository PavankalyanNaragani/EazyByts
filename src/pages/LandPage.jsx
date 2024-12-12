import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Intro from '../components/intro/Intro'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Footer from '../components/footer/Footer'


function LandPage() {
  return (
    <div>  
        <Navbar />
        <Intro />
        <Skills />
        <Contact />
        <Footer />
    </div>
    
  )
}

export default LandPage