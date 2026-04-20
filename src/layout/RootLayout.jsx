import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../component/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default RootLayout;