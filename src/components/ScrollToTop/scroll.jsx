import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

//this is to ensure all pages load and display from the top: 0;
const ScrollToTop = (props) => {

    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    
  
    return <>{props.children}</>
}

export default ScrollToTop