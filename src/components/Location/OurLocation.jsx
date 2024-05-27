import React from 'react'
import map from '../../img/map.png'
const OurLocation = () => {
  return (
    <section className="locations">
      <h3>Our Contacts</h3>
      <div className="location">
      <div className="left">
            <img src={map} alt="" />
        </div>
        <div className="right">
            <p><i class="fa-solid fa-location-dot"></i> <b>Head Office: </b> <span></span> No, 32 Brighton Avenue, Michigan</p>
            <p><i class="fa-solid fa-location-dot"></i> <b>Nigeria Office: </b> <span></span> Ajah Under-bridge, Lagos. Nigeria</p>
            <p><i class="fa-solid fa-phone"></i> <b>Contact Center (International): <span></span></b>  01-485-3499-21</p>
            <p><i class="fa-solid fa-phone"></i> <b>Contact Center (Africa): </b> <span></span> +234-703-444-4444</p>
            <p><i class="fa-solid fa-envelope"></i> <b>Mail: </b> <span></span> contactcenter@harbode.com</p>
        </div>
      </div>
    </section>
  )
}

export default OurLocation