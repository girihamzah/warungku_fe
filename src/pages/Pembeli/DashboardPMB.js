import React from 'react'
import Footer from '../../Components/Footer/Footer'
import MainPMB from '../../Components/Main/MainPMB'
import Nav from '../../Components/Navbar/Nav'
import GlobalProvider from '../../context/GlobalContext'

const DashboardPMB = () => {
    return (
        <GlobalProvider>
            <div className=' min-h-screen static'>
                <Nav/>
                <MainPMB />
                <Footer/>
            </div>
        </GlobalProvider>
    )
}

export default DashboardPMB