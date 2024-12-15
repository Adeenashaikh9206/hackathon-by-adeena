import React from 'react'
import { SiNaver } from 'react-icons/si'
import Snavbar from '../components/shopheader'
import Num from '../components/num'
import Contacticon from '../components/contacticon'
import Shop from '../components/shopbanner'
import Bshop from '../components/blogbanner'
import Blog from '../components/blog'
import BlogSection from '../components/blogmain'


const Blogpage = () => {
  return (
    <div>
      <Snavbar/>
      <Bshop/>
      <BlogSection/>
      <Num/>
      <Contacticon/>
    </div>
  )
}

export default Blogpage
