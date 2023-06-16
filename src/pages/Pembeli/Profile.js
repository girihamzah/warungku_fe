import React from 'react'
import Nav3 from '../../Components/Navbar/Nav3'
import Footer from '../../Components/Footer/Footer';
import MainProfile from '../../Components/Main/MainProfile';
import GlobalProvider from '../../context/GlobalContext';

const Profile = () => {
    return (
        <GlobalProvider>
            <div>
                <Nav3/>
                <MainProfile/>
                <Footer/>
            </div>
        </GlobalProvider>
    )
}

export default Profile