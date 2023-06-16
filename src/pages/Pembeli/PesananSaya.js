import React from 'react'
import Footer from '../../Components/Footer/Footer'
import MainPesanan from '../../Components/Main/MainPesanan'
import Nav from '../../Components/Navbar/Nav'
import GlobalProvider from '../../context/GlobalContext'
import PembeliProvider from '../../context/PembeliContext'

const PesananSaya = () => {
    return (
        <GlobalProvider>
            <PembeliProvider>
                <div>
                    <Nav/>
                    <MainPesanan/>
                    <Footer/>
                </div>
            </PembeliProvider>
        </GlobalProvider>
    )
}

export default PesananSaya