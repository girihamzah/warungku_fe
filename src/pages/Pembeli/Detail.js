import React from 'react'
import Footer from '../../Components/Footer/Footer'
import MaindDetail from '../../Components/Main/MaindDetail'
import Nav from '../../Components/Navbar/Nav'
import GlobalProvider from '../../context/GlobalContext'

const Detail = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav />
                <MaindDetail />
                <Footer />
            </div>
        </GlobalProvider>
    )
}

export default Detail