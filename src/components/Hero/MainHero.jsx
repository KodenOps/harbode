import React from 'react'
import Navbar from '../Navigation/Navbar'
import Hero from './Hero'
import HeroImageMobile from '../../img/heroImgMobile.png'
import HeroImageWeb from '../../img/heroImgWeb.png'


const MainHero = (props) => {
  return (
    <section className='hero'id='mainhero'>
        <Navbar/>
        <Hero h2='House Hunting Made Easy' p='Explore various properties that suites your needs and budget. Rent or buy? We gat your back' img={HeroImageWeb} imgMob={HeroImageMobile}/>
    </section>
  )
}

export default MainHero