import React from 'react'
import AboutImg from '../../img/aboutus.png'
import AboutImg2 from '../../img/aboutus1.png'
const MissionVision = () => {
  return (
    <section className="main-container">
        
        <div className="missionVision">
            <div className="left">
            <div className="blockbox"></div>
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>To create avenue for people irregardless of their gender, financial status, occupation etc to get affordable properties either for rent or sales without any hassle. Also, to reduce the duration span from the period of decision to the period of acquisition of the desired property.</p>
                </div>
            </div>
            <div className="right">
                <img src={AboutImg} alt="" />
            </div>
        </div>
        {/* end of our mission */}
        <div className="missionVision changeflex">
            <div className="left">
            <div className="blockbox"></div>
                <div className="content">
                    <h2>Our Vision</h2>
                    <p>To be the first option for people looking for new apartment. To be known for credibility, ease, transparency and reliability.</p>
                </div>
            </div>
            <div className="right">
                <img src={AboutImg2} alt="" />
            </div>
        </div>
        {/* end of our vision */}
    </section>
  )
}

export default MissionVision