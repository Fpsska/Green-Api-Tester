import React from 'react';

import AuthForm from 'components/layout/AuthForm/AuthForm';
import MessageForm from 'components/layout/MessageForm/MessageForm';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <AuthForm />
            <MessageForm />
        </footer>
    );
};

export default Footer;
