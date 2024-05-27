import React from 'react'
import Man from '../../img/man.png'
import { Link } from 'react-router-dom'
const NeedHelp = () => {
  return (
    <section className="NHbanner">
        <div className="left">
            <img src={Man} alt="man folding his arms" />
        </div>
        <div className="right">
            <h4>
                Need Help Choosing The Best Apartment?
            </h4>
            <p>Why stressing yourself when we are here? Let's handle all your house hunting stress. We'll find and inspect the house that suites you within few days. Just pay and move in.</p>
            <Link to='/login'><button>Get Started</button></Link>
        </div>
    </section>
  )
}

export default NeedHelp