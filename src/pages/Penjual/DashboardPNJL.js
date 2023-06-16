import React from 'react'
import MainPMB from '../../Components/Main/MainPMB'
import Footer from '../../Components/Footer/Footer'
import Nav4 from '../../Components/Navbar/Nav4'
import GlobalProvider from '../../context/GlobalContext'

const DashboardPNJL = () => {
    return (
        <GlobalProvider>
            <div className=' min-h-screen static'>
                <Nav4 />
                <MainPMB />
                <Footer />
            </div>
        </GlobalProvider>
    )
}

export default DashboardPNJL