import React from 'react';

import { useNavigate } from 'react-router';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchUserAuthorizedStatus,
    setUserIdInstance,
    setUserApiTokenInstance
} from 'app/slices/authSlice';

import { setRequestError } from 'app/slices/chatSlice';

import InteractiveButton from 'components/ui/InteractiveButton/InteractiveButton';

// /. imports

const AuthPage: React.FC = () => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // /. hooks

    const sectionTitle = isUserAuthorized
        ? 'You is already authorized'
        : 'Enter your authentication data below';

    // /. variables

    const onLogoutButtonClick = (): void => {
        dispatch(setUserIdInstance(''));
        dispatch(setUserApiTokenInstance(''));
        dispatch(switchUserAuthorizedStatus(false));
        dispatch(setRequestError(null));
    };

    const onContinueButtonClick = (): void => {
        navigate('/chat', { state: 'chat' });
    };

    // /. functions

    return (
        <section className="auth-section">
            <h2 className="section-title">{sectionTitle}</h2>
            <>
                {isUserAuthorized && (
                    <div className="auth-section__controls">
                        <InteractiveButton
                            value="Log out"
                            onButtonClick={onLogoutButtonClick}
                        />
                        <InteractiveButton
                            value="Continue"
                            onButtonClick={onContinueButtonClick}
                        />
                    </div>
                )}
            </>
        </section>
    );
};

export default AuthPage;
