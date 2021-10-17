import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
        </>
    );
};

export default Home;