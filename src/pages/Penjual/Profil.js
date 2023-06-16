import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Nav5 from '../../Components/Navbar/Nav5'
import MainProfile2 from '../../Components/Main/MainProfile2'
import GlobalProvider from '../../context/GlobalContext'

const Profil = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav5 />
                <MainProfile2 />
                <Footer />
            </div>
        </GlobalProvider>
    )
}

export default Profil