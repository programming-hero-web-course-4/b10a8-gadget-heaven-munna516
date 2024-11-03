import React from 'react';
import Banner from '../Components/Banner';
import AllProducts from '../Components/AllProducts';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;