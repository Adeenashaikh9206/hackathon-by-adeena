"use client";
import React from 'react'
import Snavbar from '../components/shopheader'
import Contacticon from '../components/contacticon'
import Myaccbanner from '../components/myaccbaaner'
import AuthPage from '../components/myaccform';

const Myacc = () => {
  return (
    <div>
        <Snavbar/>
        <Myaccbanner/>  
      <AuthPage/>
      <Contacticon/>
      
    </div>
  )
}

export default Myacc
