import React, { useEffect } from 'react';

import { useLocation } from 'react-router';

import { useAppDispatch, useAppSelector } from 'app/hooks';

import {
    setRecipientPhoneNumber,
    setMessageValue,
    setRequestError,
    switchMessageSendedStatus
} from 'app/slices/chatSlice';

import { useFetchApi } from 'utils/hooks/useFetchApi';

import FormInput from 'components/ui/FormInput/FormInput';

import './message-form.scss';

// /. imports

const MessageForm: React.FC = () => {
    const { recipientPhoneNumber, messageValue } = useAppSelector(
        state => state.chatSlice
    );
    const { userIdInstance, userApiTokenInstance } = useAppSelector(
        state => state.authSlice
    );

    const dispatch = useAppDispatch();
    const location = useLocation();

    const { error, fetchRequest } = useFetchApi();

    // /. hooks

    const isChatPage = location?.state === 'messaging';

    const onMessageFormSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<any> => {
        e.preventDefault();
        //
        const URL = `${process.env.REACT_APP_GREEN_API_URL}/waInstance${userIdInstance}/sendMessage/${userApiTokenInstance}`;

        try {
            const messageResponse = await fetchRequest(URL, 'POST', {
                chatId: `${recipientPhoneNumber}@c.us`,
                message: messageValue
            });
            // console.log('POST DATA:', messageResponse);
        } finally {
            dispatch(switchMessageSendedStatus(true));
            console.log('=== Ending sending message event ===');
        }
    };

    const onPhoneNumberInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        dispatch(setRecipientPhoneNumber(e.target.value.trim()));
    };

    const onMessageInputChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ): void => {
        dispatch(setMessageValue(e.target.value));
    };

    // /. functions

    useEffect(() => {
        return () => {
            console.log('return case');
            dispatch(switchMessageSendedStatus(false));
        };
    }, []);

    useEffect(() => {
        error && dispatch(setRequestError(error));
    }, [error]);

    // /. effects

    return (
        <form
            className="message-form"
            action="#"
            onSubmit={e => onMessageFormSubmit(e)}
        >
            <div className="message-form__inputs">
                <FormInput
                    placeholder="Type a phone number"
                    onInputChange={onPhoneNumberInputChange}
                    value={recipientPhoneNumber}
                    isDisabled={!isChatPage}
                />
                <textarea
                    className="message-form__text-area"
                    placeholder="Type a message"
                    required
                    disabled={!isChatPage}
                    value={messageValue}
                    onChange={e => onMessageInputChange(e)}
                ></textarea>
            </div>

            <button
                className="message-form__button"
                type="submit"
                aria-label="send message"
                disabled={!isChatPage}
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
        </form>
    );
};

export default MessageForm;
