import React from 'react';

import AuthForm from 'app/components/layout/AuthForm/AuthForm';
import MessageForm from 'app/components/layout/MessageForm/MessageForm';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <AuthForm />
        </footer>
    );
};

export default Footer;
