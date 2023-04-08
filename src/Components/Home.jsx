import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='h-[calc(100vh-144px)]'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Home;