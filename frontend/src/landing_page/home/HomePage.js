import React from 'react'
import HeroSection from './HeroSection'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
import Pricing from './Pricing'
import OpenAccount from '../OpenAccount'

function HomePage() {
  return (
    <>
        <HeroSection/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </>
  )
}

export default HomePage