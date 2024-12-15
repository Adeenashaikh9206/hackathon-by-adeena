import React from 'react'
import Shop from '../components/shopbanner'
import ProductGrid from '../components/shoppingproduct'
import Shop1 from '../components/step3'
import Contacticon from '../components/contacticon'
import Toolbar from '../components/tool'
import Snavbar from '../components/shopheader'

const Shoppage = () => {
  return (
    <div>
      <Snavbar/>
      <Shop/>
      <Toolbar/>
  <Shop1/>
  <Contacticon/>
    </div>
  )
}

export default Shoppage
