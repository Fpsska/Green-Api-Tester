import React, { useState } from 'react';

import { Imessage } from 'types/chatSliceTypes';

import MessageTemplate from './MessageTemplate';

import './messages-list.scss';

// /. imports

const MessagesList: React.FC<{ additionalClass?: string }> = ({
    additionalClass
}) => {
    const [messagesData] = useState<Imessage[]>([
        {
            chatId: '1',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '2',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '3',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '4',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '5',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '6',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '7',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '8',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '9',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '10',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '11',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '12',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '13',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '14',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '15',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '16',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '17',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '18',
            message: 'I use Green-API to send this message to you!'
        },
        {
            chatId: '19',
            message: 'Hello! Green-API here!'
        },
        {
            chatId: '20',
            message: 'I use Green-API to send this message to you!'
        }
    ]);

    // /. hooks

    return (
        <ul
            className={`${
                additionalClass ? additionalClass : ''
            } messages-list`}
        >
            {messagesData.map((message: Imessage) => {
                return (
                    <MessageTemplate
                        key={message.chatId}
                        {...message}
                    />
                );
            })}
        </ul>
    );
};

export default MessagesList;
