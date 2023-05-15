import React from 'react';

import { makeDateFormatting } from 'utils/helpers/makeDateFormatting';

// /. imports

interface propTypes {
    message: string;
    senderName: string;
    time: string;
    isOwnMessage?: boolean;
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = props => {
    const { message, senderName, time, isOwnMessage } = props;

    return (
        <li className={`messages-list__template ${isOwnMessage ? 'own' : ''} `}>
            <span className="messages-list__name">{senderName}</span>
            <span className="messages-list__text">{message}</span>
            <span className="messages-list__time">
                {makeDateFormatting(time)}
            </span>
        </li>
    );
};

export default MessageTemplate;
