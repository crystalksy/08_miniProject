import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Categories from '../components/Categories'

const Home = () => {
    return (
        <div>
          <Announcement/>
          <Navbar/>  
          <Slider/>
          <Footer/>
          <Categories/>
        </div>
    )
}

export default Home
