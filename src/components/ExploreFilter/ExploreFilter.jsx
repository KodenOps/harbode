import React from 'react'
import {Exploreproperties} from '../Properties/Exploreproperties';
import { useState } from 'react';
const Property_List = () => {

    const [begin, setbegin] = useState(0)
    const [end, setend] = useState(10)
    const [backgrounds, setbackgrounds] = useState('#008148');
    const [backgroundss, setbackgroundss] = useState('#333');
    
    return(
        <>
        <section  className="main-box-container" id='filter'>
            {Exploreproperties.slice(begin, end).map((e)=>{
                return(
                <div className="main-box" key={e.id}>

                    <div className="top">
                        <div className="left">
                            <img src={e.imgUrl} alt="" />
                        </div>
                        <div className="right">
                            <div className="up">
                                <h5 >{e.name}</h5>
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
            
        </section>
        <br/>
        <div className="butto">
            <button className="prev" style={{backgroundColor: backgroundss}} onClick={(e)=>{
                if(begin === 0 || begin < 0){
                    setbackgroundss('#333')
                    setbackgrounds('#008148')
                }
                
                if(end <= 24 ){
                    setbackgrounds('#008148')
                }
                if(begin >= 10 ){
                    setbegin(begin - 10)
                }
                if(end >= 20){
                    setend(end - 10)
                }
            }}>Previous</button>
            <button className="Next" style={{backgroundColor: backgrounds}} onClick={(e)=>{
               if(begin !== 0 || begin > 0){
                setbackgroundss('#008148')
                setbackgrounds('#008148')
            }
                if(end === 24 || end >= 24){
                    setbackgrounds('#333')
                    setbackgroundss('#008148')
                }
               
                 if(begin <= 10 ){
                    setbegin(begin + 10)
                }
                if(end <= 20){
                    setend(end + 10)
                }
            }}>Next</button>
        </div>
       </>
    )
       
        
    


    }
export default Property_List
