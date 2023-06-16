import React from 'react'
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer';
import MainBayar from '../../Components/Main/MainBayar';
import GlobalProvider from '../../context/GlobalContext';

const Bayar = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav/>
                <MainBayar/>
                <Footer/>
            </div>
        </GlobalProvider>
    )
}

export default Bayar