import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
        </>
    );
};

export default Home;