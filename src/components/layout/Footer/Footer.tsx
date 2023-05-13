import React from 'react';

import { useAppSelector } from 'app/hooks';

import AuthForm from 'components/layout/AuthForm/AuthForm';
import MessageForm from 'components/layout/MessageForm/MessageForm';

import './footer.scss';

// /. imports

const Footer: React.FC = () => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);

    // /. hooks

    return (
        <footer className="footer">
            {isUserAuthorized ? <MessageForm /> : <AuthForm />}
        </footer>
    );
};

export default Footer;
