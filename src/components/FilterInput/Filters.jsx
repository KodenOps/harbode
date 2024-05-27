import React from 'react'
import PropertyList from '../ExploreFilter/ExploreFilter'
import { useState } from 'react'
const Filters = () => {
const [BtnId, setBtnId] = useState('hide');

function toggleFunction(){
   
                if(BtnId === 'hide'){
                    setBtnId('show')
                }
                else{
                    setBtnId('hide')
                }
}
  return (
    <section className='filters'>
        <form action="post" className="filterparameter">
            <div className="top" id={BtnId}>
                <select name="property type" id="proptype">
                    <option value="default">Property</option>
                    <option value="Houses">Houses</option>
                    <option value="Lands">Lands</option>
                    <option value="Hostels">Hostels</option>
                    <option value="Short-let">Short-let</option>
                    <option value="Shops">Shops</option>
                </select>
                {/* end of property type */}
                <select name="acq-type" id="acq-type">
                    <option value="default">Type</option>
                    <option value="Rent">Rent</option>
                    <option value="Lease">Lease</option>
                    <option value="Purchase">Purchase</option>
                </select>
                {/* End of acquisition type */}
                <select name="location" id="location">
                    <option value="default "> Location</option>
                    <option value="lagos"> Lagos</option>
                    <option value="ibadan"> Ibadan</option>
                    <option value="Ogun"> Ogun</option>
                    <option value="Osun"> Osun</option>
                    <option value="Abuja"> Abuja</option>
                    <option value="Sokoto"> Sokoto</option>
                    <option value="Port Harcourt"> Port Harcourt</option>
                </select>
                {/* End of location */}
                <select name="price" id="prices" className="prices">
                    <option value="default">Price Range</option>
                    <option value="least">50,000 - 199,999</option>
                    <option value="small">200,000 - 399,999</option>
                    <option value="medium">400,000 - 899,999</option>
                    <option value="high">900,000 - 1.4M</option>
                    <option value="Extreme">+1.4M</option>
                </select>
            </div>
            <div className="bottom">
            <input type="text" name="search" id="search" placeholder='Search for property/Advert ID' />
            <button className='smallbtn filter'id='filter'  onClick={(e)=>{
                 e.preventDefault()
                toggleFunction();
            }}><i className="fa fa-filter"  aria-hidden="true"></i></button>
            <button className='smallbtn' type='submit' onClick={(e)=>{
                 e.preventDefault()
            }}><i className="fa fa-search"  aria-hidden="true"></i></button>
                <button type="submit" className='submit'>Search Now</button>
            </div>
        </form>
       <PropertyList/>
    </section>
  )
}

export default Filters