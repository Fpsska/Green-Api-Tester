import React from 'react';

import FormInput from 'app/components/ui/FormInput/FormInput';

import './message-form.scss';

// /. imports

const MessageForm: React.FC = () => {
    return (
        <form
            className="message-form"
            action="#"
            onSubmit={e => e.preventDefault()}
        >
            <div className="message-form__inputs">
                <FormInput placeholder="Type a phone number" />
                <textarea
                    className="message-form__text-area"
                    placeholder="Type a message"
                    required
                ></textarea>
            </div>

            <div className="message-form__controls">
                <button
                    className="message-form__button"
                    type="submit"
                    aria-label="send message"
                >
                    <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        preserveAspectRatio="xMidYMid meet"
                        version="1.1"
                        x="0px"
                        y="0px"
                        enableBackground="new 0 0 24 24"
                        xmlSpace="preserve"
                    >
                        <path
                            fill=""
                            d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"
                        ></path>
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default MessageForm;
