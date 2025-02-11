// import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import DarkMode from "./components/Navbar/DarkMode"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import TopProducts from "./components/TopProducts/TopProducts"
import Subscribe from "./components/Subscribe/Subscribe"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

function App() {
    const [orderPopup, setOrderPopup] = useState(false)

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup)
    }

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        })
        Aos.refresh()  
    },[])

  return (
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-900'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
     <Products />
     <TopProducts handleOrderPopup={handleOrderPopup} />
     <Banner />
     <Subscribe />
     <Testimonials />
     <Footer/ >
    </div>
  
    </>
  )
}

export default App