import React from 'react'

const FilterRibbon = () => {
  return (
    <section className='main-ribbon'>
    <section className='ribbon'>
        <div className="location">
            <select name="location" id="location">
                <option value="default ">&#xf3c5; Location</option>
                <option value="lagos">&#xf3c5; Lagos</option>
                <option value="ibadan">&#xf3c5; Ibadan</option>
                <option value="Ogun">&#xf3c5; Ogun</option>
                <option value="Osun">&#xf3c5; Osun</option>
                <option value="Abuja">&#xf3c5; Abuja</option>
                <option value="Sokoto">&#xf3c5; Sokoto</option>
                <option value="Port Harcourt">&#xf3c5; Port Harcourt</option>
            </select>
        </div>
        {/* end of location */}
        <div className="category">
            <select name="category" id="category">
                <option value="default">Category</option>
                <option value="Rent">Rent</option>
                <option value="Sales">Sales</option>
                <option value="Lease">Lease</option>
                <option value="Short-Let">Short-Let</option>
            </select>
        </div>
        {/* end of category */}
        <div className="price">
            <select name="price" id="price" className="price">
                <option value="default">Price Range</option>
                <option value="least">50,000 - 199,999</option>
                <option value="small">200,000 - 399,999</option>
                <option value="medium">400,000 - 899,999</option>
                <option value="high">900,000 - 1.4M</option>
                <option value="Extreme">+1.4M</option>
            </select>
        </div>
        <button className='web'>Search</button>
    </section>
   
    </section>
  )
}

export default FilterRibbon