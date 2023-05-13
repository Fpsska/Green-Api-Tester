import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from 'app/components/layout/Header/Header';
import Footer from 'app/components/layout/Footer/Footer';

// /. imports

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
