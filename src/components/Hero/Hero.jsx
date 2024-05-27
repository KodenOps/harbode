import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({h2, p, img, imgMob}) => {
  return (
    <div className="hero-content">
        <div className="left">
            <h2>{h2}</h2>
            <p>{p}</p>
            <Link to='./explore'><button>Explore</button></Link>
        </div>
        <div className="right">
            <img src={img} alt="" className='web' />
            <img src={imgMob} alt="" className='mobile' />
        </div>
    </div>
  )
}

export default Hero