import React from 'react'
import img1 from '../../img/1.png'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import img4 from '../../img/4.png'
const Testimonials = () => {
  return (
    <section className='testimonials'>
        <div className="header">
        <h2>Testimonials</h2>
        <p>Words from our satisfied users. Our quality preceed us, and the testimonies keep following.</p>
        </div>
        <div className="container">
            <div className="box">
                <p><i className="fa-solid fa-quote-left"></i><br/>I can't believe there is a website that makes getting a comfortable house a seamless process. Just few scroll on the web, boom---keysssssss <i className="fa-solid fa-quote-right"></i></p>
                <div className="person">
                    <h4 className="name">Damilola Ekundayo</h4>
                    <h6><li>Product Designer</li></h6>
                </div>
                <span><img src={img1} alt="" /></span>
            </div>
            <div className="box">
                <p><i className="fa-solid fa-quote-left"></i><br/>I've tried a lot of platforms to advertise my available housing estate but Harbode is the best. From the way they market my houses to the way they help out with complaints. <i className="fa-solid fa-quote-right"></i></p>
                <div className="person">
                    <h4 className="name">Helen Reuben</h4>
                    <h6><li>House Agent</li></h6>
                </div>
                <span><img src={img2} id='ytb' alt="" /></span>
            </div>
            <div className="box">
                <p><i className="fa-solid fa-quote-left"></i><br/>I won't say much. If you are looking for apartments, shops, co-working spaces, then Harbode should be your first and the last choice. <i className="fa-solid fa-quote-right"></i></p>
                <div className="person">
                    <h4 className="name">Aremu Jane</h4>
                    <h6><li>Clerk</li></h6>
                </div>
                <span><img src={img3} alt="" /></span>
            </div>
            <div className="box">
                <p><i className="fa-solid fa-quote-left"></i><br/>Best deals happens only on Harbode. With our tight budget, their professional agents fixed us with a house that suites our need. Surely the best <i className="fa-solid fa-quote-right"></i></p>
                <div className="person">
                    <h4 className="name">Mr & Mrs John</h4>
                    <h6><li>Youtuber</li></h6>
                </div>
                <span><img src={img4} id='ytb' alt="" /></span>
            </div>
        </div>
    </section>
  )
}

export default Testimonials