import React from 'react'
import Contactform from '../components/Contactform/Contactform'
import ContactHero from '../components/ContactHero/ContactHero'
import ContactEnjoy from '../components/Enjoy/ContactEnjoy'
import Footer from '../components/Footer/Footer'
import OurLocation from '../components/Location/OurLocation'
import Navbar from '../components/Navigation/Navbar'
import OnTheGo from '../components/OnTheGo/OnTheGo'

const Contact = () => {
  return (
    <section className="contact_us">
        <Navbar/>
        <ContactHero/>
        <ContactEnjoy/>
        <Contactform/>
        <OurLocation/>
        <OnTheGo/>
        <Footer/>
    </section>
  )
}

export default Contact