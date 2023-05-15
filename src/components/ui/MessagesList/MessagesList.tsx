import React from 'react';

import { Imessage } from 'types/chatSliceTypes';

import MessageTemplate from './MessageTemplate';

import './messages-list.scss';

// /. imports

interface propTypes {
    additionalClass?: string;
    data: Imessage[];
}

// /. interfaces

const MessagesList: React.FC<propTypes> = ({ additionalClass, data }) => {
    return (
        <ul
            className={`${
                additionalClass ? additionalClass : ''
            } messages-list`}
        >
            {data.map((message: Imessage) => {
                return (
                    <MessageTemplate
                        key={message.id}
                        {...message}
                    />
                );
            })}
        </ul>
    );
};

export default MessagesList;
