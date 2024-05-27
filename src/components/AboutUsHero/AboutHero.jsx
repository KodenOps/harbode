import React from 'react'
// import { Link } from 'react-router-dom'
import HeroImg from '../../img/AboutimgWeb.png'
// import HeroImgMob from '../../img/AboutimgMob.png'
import '../../aboutus.css'

const AboutHero = () => {
  return (
    <section className="abouthero">
        <div className="hero-content hero-content-explore">
            <div className="left exploreleft">
                <h2>Thinking about Who We Are?</h2>
                <p>We are your number one webiste for everything relating to house hunting. Save the stress, hunt for apartments like a good predator!</p>
                
            </div>
        <div className="right" id='aboutimg'>
            <img src={HeroImg} alt="" className='web' />
            <img src={HeroImg} alt="" className='mobile' />
        </div>
    </div>
    </section>
  )
}

export default AboutHero