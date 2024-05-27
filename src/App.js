import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop/scroll'
import Explore from './pages/Explore'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
const App = () => {
  
 
  
  return (


    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/explore" element={<Explore  /> }/>
        <Route path="/about-us" element={<AboutUs /> }/>
        <Route path="/contact-us" element={<Contact /> }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        </Routes>
        </ScrollToTop>
    </BrowserRouter>
  )
}

export default App