import React from 'react';

import Header from 'app/components/layout/Header/Header';
import Footer from 'app/components/layout/Footer/Footer';

import MessageForm from 'app/components/layout/MessageForm/MessageForm';

import './App.css';
import 'assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <MessageForm />
            </main>
            <Footer />
        </div>
    );
};

export default App;
