import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroImg from '../../img/explore.png'
import HeroImgMob from '../../img/exploremob.png';
// import { Link } from 'react-router-dom';
const ExploreHero = () => {
  return (
    <section className='hero'>
        <Navbar/>
        <div className="hero-content hero-content-explore">
        <div className="left exploreleft">
            <h2>Office Spaces Now Available</h2>
            <p>A new addition to the Harbode website. You can now rent office spaces on the website.</p>
            <a href='#filter'><button>Explore</button></a>
        </div>
        <div className="right exploreimg">
            <img src={HeroImg} alt="" className='web' />
            <img src={HeroImgMob} alt="" className='mobile' />
        </div>
    </div>
    </section>
  )
}

export default ExploreHero