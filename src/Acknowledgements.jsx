import React from 'react'
import Archives from './components/Archives'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Participants from './components/Participants'
import Sponsors from './components/Sponsors'

function Acknowledgements() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Archives/>
      <Participants/>
      <Sponsors/>
      <Footer/>
    </div>
  )
}

export default Acknowledgements
