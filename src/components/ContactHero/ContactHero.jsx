import React from 'react'
import HeroImg from '../../img/about.png'
const ContactHero = () => {
  return (
    <section className="contact">
        <div className="contactflex">
            <div className="left ">
                <h2>Need Help?</h2>
                <p>Are you curious or have an issue with getting what you want at the right time, Hit our customer care representatives up. Anytime, Anyday,</p>
                
            </div>
        <div className="right">
            <img src={HeroImg} alt="" className='web' id='img'/>
            <img src={HeroImg} alt="" className='mobile' id='img'/>
        </div>
    </div>
    </section>
  )
}

export default ContactHero