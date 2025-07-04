import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
const Mainlayout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Mainlayout
