import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png';
import Logo1 from '../img/logomob.png';
const Signup = () => {
  return (
    <section className="login">
        <nav className='web'>
        <div className="logo">
        <Link to='/'><img src={Logo} alt="" className='main-logo' /></Link>
        </div>
        <div className="hero-right">
            <div className="links">
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/explore'><li>Explore</li></Link>
                    <Link to='/about-us'><li>About Us</li></Link>
                    <Link to='/contact-us'><li>Contact Us</li></Link>
                </ul>
            
            </div>
            <Link to='/login'>
            <div className="user-home-btn">
           <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            </Link>
            
        </div>
        <div className="hamburger">
        <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        </nav>
        <nav className='mobile'>
          <Link to='/'><img src={Logo1} alt="" className='main-logo' /></Link>
          <div className="hamburger">
            <i className="fa fa-bars" aria-hidden="true" id='i'></i>
          </div>
        </nav>
       <div className="login-box">          
          <div className="left">
            <img src="https://images.unsplash.com/photo-1561026554-29d9815d4f3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="" />
          </div>
          <div className="right right2">
            <h4>Welcome Onboard</h4>
            <p>Kindly fill the form to register on Habode</p>
            <form action="">
              <input type="email" placeholder='Enter your Email' required autoComplete='off'  autoFocus/>
              <div className="flexme">
                <input type="text" placeholder='First Name' id='firstname' required/>
                <input type="text" placeholder='Last Name' required />
              </div>
              <input type="password" placeholder='Password' required autoComplete='off' />
              <button type="submit">Login</button>
            </form>
            <div className="forgotcredentials">
              <p>Have An Account? <span><Link to='/login'><b> Login Instead</b></Link></span></p>
            </div>
            
          </div>
       </div>
    </section>
  )
}

export default Signup