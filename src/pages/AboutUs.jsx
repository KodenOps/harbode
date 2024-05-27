import React from 'react'
import AboutHero from '../components/AboutUsHero/AboutHero'
import Footer from '../components/Footer/Footer'
import MissionVision from '../components/MissionAndVission/MissionVision'
import Navbar from '../components/Navigation/Navbar'
import OnTheGo from '../components/OnTheGo/OnTheGo'
import Partners from '../components/Partners/Partners'
import Testimonials from '../components/Testimonial/Testimonials'
const AboutUs = (props) => {
  return (
    <section className='about_Us'>
      <Navbar/>
      <AboutHero/>
      <MissionVision/>
      <Partners/>
      <Testimonials/>
      <OnTheGo/>
      <Footer/>
    </section>
  )
}

export default AboutUs