import React from 'react'
import Mock from '../../img/woodenHand.png'
const OnTheGo = () => {
  return (
    <section className="onthego">
        <div className="left">
            <h4>Harbode On The GO!</h4>
            <p>Download the Harbode mobile app and enjoy a seamless experience while looking for that dream house. Download the app and stand a chance to win a lot of mouth-watering prizes</p>
            <div className="bottom">
                <h5>Get Started Now</h5>
                <div className="buttons">
                    <div className="android">
                    <i className="fa-brands fa-android"></i>
                    <h6>Download for Android</h6>
                    </div>
                    <div className="ios">
                    <i className="fa-brands fa-apple"></i>
                    <h6>Download for IOS</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <img src={Mock} alt="" />
        </div>
    </section>
  )
}

export default OnTheGo