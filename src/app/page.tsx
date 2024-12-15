import React from 'react'
import Navbar from './components/header'
import MainSection from './components/table'
import Home from './components/main'
 import Sofa from './components/sofa'
import Blog from './components/blog'
import HeroSection from './components/hero'
import InstagramSection from './components/insta'


const Page = () => (
  <div>

     <HeroSection/>
    <MainSection />
    <Home /> 
    <Sofa />
    <Blog />  
     <InstagramSection/>
    
  </div>
)

export default Page
