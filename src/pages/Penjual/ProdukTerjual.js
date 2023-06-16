import React from 'react'
import Nav6 from '../../Components/Navbar/Nav6'
import Footer from '../../Components/Footer/Footer'
import MainTerjual from '../../Components/Main/MainTerjual'
import GlobalProvider from '../../context/GlobalContext'

const ProdukTerjual = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav6 kategori="Produk Terjual"/>
                <MainTerjual />
                <Footer />
            </div>
        </GlobalProvider>
    )
}
export default ProdukTerjual