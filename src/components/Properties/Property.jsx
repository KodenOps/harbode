import React from 'react'
import {properties} from './propertiesobj'
import { Link } from 'react-router-dom'
const Property = () => {
    return(
        <section className='property'>
            <h4>Latest Properties</h4>

            <div className="main-box-container">
            {properties.map((e)=>{
                return(
                <div className="main-box" key={e.id}>

                    <div className="top">
                        <div className="left">
                            <img src={e.imgUrl} alt="" />
                        </div>
                        <div className="right">
                            <div className="up">
                                <h5>{e.name}</h5>
                                <p>{e.desc}</p>
                            </div>
                            <div className="down">
                                <p>#{e.price} <span>/Annum</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p><i className="fa fa-bed" aria-hidden="true"></i> {e.amenity.bedroom} <span> Bedrooms</span></p>
                        <p><i className="fa fa-shower" aria-hidden="true"></i> {e.amenity.bathroom} <span>Bathrooms</span></p>
                        <p><i className="fa fa-toilet"></i> {e.amenity.Toilets} <span>Toilets</span></p>
                        <p><i className="fa-solid fa-car"></i> {e.amenity.ParkingSpace} <span>car park</span></p>
                    </div>
                </div>
                )
            })}
            </div>
                <Link to='/explore'> <button className="findMore">Find More</button></Link>
        </section>
    )
   
 
}

export default Property