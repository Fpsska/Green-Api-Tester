import React from 'react';

import FormInput from 'components/ui/FormInput/FormInput';

import './auth-form.scss';

// /. imports

const AuthForm: React.FC = () => {
    return (
        <form
            className="auth-form"
            action="#"
            onSubmit={e => e.preventDefault()}
        >
            <FormInput placeholder="Type a idInstance" />
            <FormInput placeholder="Type a apiTokenInstance" />
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
