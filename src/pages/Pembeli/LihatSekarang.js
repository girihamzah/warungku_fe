import React from 'react'
import MainLSKR from '../../Components/Main/MainLSKR'
import Nav2 from '../../Components/Navbar/Nav2'
import Footer from '../../Components/Footer/Footer'
import GlobalProvider from '../../context/GlobalContext'

const LihatSekarang = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav2 kategori="Keranjang Saya" />
                <MainLSKR />
                <Footer />
            </div>
        </GlobalProvider>
    )
}

export default LihatSekarang