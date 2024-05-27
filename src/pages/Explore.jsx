import React from 'react'
import ExploreHero from '../components/ExploreHero/ExploreHero'
import Filters from '../components/FilterInput/Filters'
import Footer from '../components/Footer/Footer'
import OnTheGo from '../components/OnTheGo/OnTheGo'
const Explore = () => {
  return (
    <section className='explore'>
        <ExploreHero/>
        <Filters/>
        <OnTheGo/>
        <Footer props='/explore'/>
    </section>
  )
}

export default Explore
