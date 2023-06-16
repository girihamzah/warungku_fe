import React from 'react'
import Footer from '../../Components/Footer/Footer'
import MainKategori from '../../Components/Main/MainKategori'
import Nav from '../../Components/Navbar/Nav2'
import GlobalProvider from '../../context/GlobalContext'


const Kategori = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav 
                kategori = "Makanan Pokok"/>
                <MainKategori />
                <Footer/>
            </div>
        </GlobalProvider>
    )
}

export default Kategori