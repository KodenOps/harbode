import {useState, React} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import '../../Sidebar.css'
const Navbar = (props) => {
    const [display, setdisplay] = useState('sidebarhide')
  return (
    <section>
        {/* start of side bar - open on hambugger click */}
        <section id='flexme' className={display}>
            <div className="flex">
                <div className="user-img">
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user icon" />
                    <h6>User name</h6>
                    <p>Login to see profile</p>
                    
            </div>
            <p className='close' onClick={()=>setdisplay('sidebarhide')}><i class="fa-solid fa-circle-xmark"></i>close</p>
            </div>
        
        <ul className="bottom-link">
                    <Link to='/' onClick={()=>setdisplay('sidebarhide')}><li>Home</li></Link>
                    <Link to='/explore' onClick={()=>setdisplay('sidebarhide')}><li>Explore</li></Link>
                    <Link to='/about-us' onClick={()=>setdisplay('sidebarhide')}><li>About Us</li></Link>
                    <Link to='/contact-us' onClick={()=>setdisplay('sidebarhide')}><li>Contact Us</li></Link>
                    <div className="flexme">
                    <Link to='/login' onClick={()=>setdisplay('sidebarhide')} id='logins'><li>Login</li></Link>
                    <Link to='/signup' onClick={()=>setdisplay('sidebarhide')}><li>Signup</li></Link>
                    </div>
        </ul>
    </section>
    {/* end of side bar */}
    <nav>
        
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
        <div className="hamburger" >
        <i className="fa fa-bars" aria-hidden="true" onClick={()=>{
            setdisplay('sidebar')}}></i>
        </div>
        </nav>
    </section>
    
  )
}

export default Navbar