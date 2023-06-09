import React, { useState } from 'react';

import { useNavigate, useLocation } from 'react-router';

import { useAppDispatch, useAppSelector } from 'app/hooks';

import {
    setUserIdInstance,
    setUserApiTokenInstance,
    switchUserAuthorizedStatus
} from 'app/slices/authSlice';

import FormInput from 'components/ui/FormInput/FormInput';
import Loader from 'components/ui/Loader/Loader';

import './auth-form.scss';

// /. imports

const AuthForm: React.FC = () => {
    const { userIdInstance, userApiTokenInstance } = useAppSelector(
        state => state.authSlice
    );

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    // /. hooks

    const isUnknownPage = location?.state === 'unknown';
    const isFormAvaliable = !isLoading && !isUnknownPage;

    // /. variables

    const onAuthFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        if (!isFormAvaliable) return;

        e.preventDefault();

        setIsLoading(true);

        setTimeout(() => {
            dispatch(switchUserAuthorizedStatus(true));
            localStorage.setItem('storageUserAuthStatus', JSON.stringify(true));

            navigate('/chat', { state: 'messaging' });
        }, 1800);
    };

    const onIdInstanceInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        dispatch(setUserIdInstance(e.target.value.trim()));
    };

    const onApiTokenInstanceChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        dispatch(setUserApiTokenInstance(e.target.value.trim()));
    };

    // /. functions

    return (
        <form
            className="auth-form"
            action="#"
            onSubmit={e => onAuthFormSubmit(e)}
        >
            <div className="auth-form__group">
                <FormInput
                    placeholder="Type a idInstance"
                    onInputChange={onIdInstanceInputChange}
                    value={userIdInstance}
                    isDisabled={!isFormAvaliable}
                />
                <FormInput
                    placeholder="Type a apiTokenInstance"
                    onInputChange={onApiTokenInstanceChange}
                    value={userApiTokenInstance}
                    isDisabled={!isFormAvaliable}
                />
                <>{isLoading && <Loader />}</>
            </div>

            <button
                className="auth-form__button"
                type="submit"
                disabled={!isFormAvaliable}
            >
                Verify
            </button>
        </form>
    );
};

export default AuthForm;
