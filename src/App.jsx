import React from 'react'
import './styles/variables.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Mission from './components/Mission'
import WhyNow from './components/WhyNow'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <WhyNow />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
