import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer>
        <div className="scrollup">
            <Link to={props}><p><i className="fa fa-angle-double-up" aria-hidden="true"></i></p></Link>
        </div>
        <div className="rightReserve">
            <p>All right Reserved. Harbode 2022</p>
        </div>
        <div className="contacts">
         
            <Link to='/explore' className='AboutUss'> <i className="fa fa-book" aria-hidden="true"></i><p>Explore</p></Link>
            <Link to='/about-us' className='AboutUss'> <i className="fa fa-book" aria-hidden="true"></i><p>About Us</p></Link>
            <Link to='/contact-us' className='AboutUss'> <i className="fa fa-book" aria-hidden="true"></i><p>Contact Us</p></Link>
            <p style={{marginBottom: '20px'}}><i className="fa-solid fa-envelope"></i> info@harbode.com</p>
            <p><i className="fa-brands fa-rocketchat"></i> Chat Ava Online</p>
            </div>
    </footer>
  )
}

export default Footer