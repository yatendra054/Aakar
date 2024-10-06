import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import AddFriendsSection from './components/AddFriendsSection'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <AddFriendsSection/>
      <Footer/>
    </>
  )
}

export default App
