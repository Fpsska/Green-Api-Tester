import React from 'react';

import Header from 'app/components/layout/Header/Header';
import Footer from 'app/components/layout/Footer/Footer';

import './App.css';
import 'assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">main</main>
            <Footer />
        </div>
    );
};

export default App;
