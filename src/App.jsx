import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/skills'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Portfolio /> */}
      <Footer />
    </>
  )
}

export default App