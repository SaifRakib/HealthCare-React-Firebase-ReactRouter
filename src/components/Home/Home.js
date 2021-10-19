import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Newsletter from '../Newsletter/Newsletter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Newsletter></Newsletter>
            
        </>
    );
};

export default Home;