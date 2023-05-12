import React from 'react';

import './auth-form.scss';

// /. imports

const AuthForm: React.FC = () => {
    return (
        <form
            className="auth-form"
            action="#"
            onSubmit={e => e.preventDefault()}
        >
            <input
                className="auth-form__input"
                type="text"
                required
                placeholder="Type a idInstance"
            />
            <input
                className="auth-form__input"
                type="text"
                required
                placeholder="Type a apiTokenInstance"
            />
            <button
                className="auth-form__button"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default AuthForm;
