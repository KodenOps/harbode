import React from 'react'
import logo1 from '../../img/logo/logo1.png'
import logo2 from '../../img/logo/logo2.png'
import logo3 from '../../img/logo/logo3.png'
import logo4 from '../../img/logo/logo4.png'
const Partners = () => {
  return (
    <section className="partners">
        <h3>Featured Partners</h3>
        <div className="logos">
            <img src={logo1} alt="" id='logo4' />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" id='logo4' />
        </div>
    </section>
  )
}

export default Partners