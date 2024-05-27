import React from 'react'
import FilterRibbon from '../components/filterribbon/FilterRibbon'
import Footer from '../components/Footer/Footer'
import MainHero from '../components/Hero/MainHero'
import NeedHelp from '../components/NeedHelpBanner/NeedHelp'
import OnTheGo from '../components/OnTheGo/OnTheGo'
import Partners from '../components/Partners/Partners'
import Property from '../components/Properties/Property'

import '../index.css'
const Home = () => {
  return (
    <div className='' >
        <MainHero/>
        <FilterRibbon/>
        <Partners/>
        <Property/>
        <NeedHelp/>
        <OnTheGo/>
        <Footer props='/'/>
    </div>
  )
}

export default Home