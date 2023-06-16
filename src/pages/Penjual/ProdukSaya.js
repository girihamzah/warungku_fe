import React from 'react'
import Footer from '../../Components/Footer/Footer'
import MainProduk from '../../Components/Main/MainProduk';
import Nav6 from '../../Components/Navbar/Nav6';
import GlobalProvider from '../../context/GlobalContext';
import PenjualProvider from '../../context/PenjualContext'

const ProdukSaya = () => {
    return (
        <GlobalProvider>
            <PenjualProvider>
                <div>
                    <Nav6 kategori= "Produk saya"/>
                    <MainProduk />
                    <Footer />
                </div>
            </PenjualProvider>
        </GlobalProvider>
    )
}

export default ProdukSaya