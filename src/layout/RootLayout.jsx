import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../component/shared/Footer';
import Navbar from '../component/shared/navbar/Navbar';

const RoutLayout = () => {
    return (
        <div>
           <Navbar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default RoutLayout;