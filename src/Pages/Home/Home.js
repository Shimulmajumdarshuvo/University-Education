import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Information from '../Information/Information';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Company></Company>
            <Service></Service>
            <Experience></Experience>
            <Information></Information>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;