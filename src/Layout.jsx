import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet is used for page dinimcly change without refreshing for example we put in middle of return, that means header and  footer will same but home is change


function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer /> 
        </>
    )
}

export default Layout
