import React from 'react';

import { useNavigate } from 'react-router';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import {
    switchUserAuthorizedStatus,
    setUserIdInstance,
    setUserApiTokenInstance
} from 'app/slices/authSlice';

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
                        <button
                            className="auth-section__button"
                            type="button"
                            onClick={onLogoutButtonClick}
                        >
                            Log out
                        </button>
                        <button
                            className="auth-section__button"
                            type="button"
                            onClick={onContinueButtonClick}
                        >
                            Continue
                        </button>
                    </div>
                )}
            </>
        </section>
    );
};

export default AuthPage;
