import React from 'react';

import { useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from 'app/hooks';

import {
    setUserIdInstance,
    setUserApiTokenInstance,
    switchUserAuthorizedStatus
} from 'app/slices/authSlice';

import FormInput from 'components/ui/FormInput/FormInput';

import './auth-form.scss';

// /. imports

const AuthForm: React.FC = () => {
    const { userIdInstance, userApiTokenInstance } = useAppSelector(
        state => state.authSlice
    );

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // /. hooks

    const onAuthFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        //
        dispatch(switchUserAuthorizedStatus(true));
        navigate('/chat', { state: 'messaging' });
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
            <FormInput
                placeholder="Type a idInstance"
                onInputChange={onIdInstanceInputChange}
                value={userIdInstance}
            />
            <FormInput
                placeholder="Type a apiTokenInstance"
                onInputChange={onApiTokenInstanceChange}
                value={userApiTokenInstance}
            />
            <button
                className="auth-form__button"
                type="submit"
            >
                Verify
            </button>
        </form>
    );
};

export default AuthForm;
