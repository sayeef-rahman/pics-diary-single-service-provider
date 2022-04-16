import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import GetInTouch from './GetInTouch/GetInTouch';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;