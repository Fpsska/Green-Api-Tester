import React from 'react';

import { makeDateFormatting } from 'utils/helpers/makeDateFormatting';

// /. imports

interface propTypes {
    message: string;
    senderName: string;
    time: string;
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = ({
    message,
    senderName,
    time
}) => {
    return (
        <li className="messages-list__template">
            <span className="messages-list__name">{senderName}</span>
            <span className="messages-list__text">{message}</span>
            <span className="messages-list__time">
                {makeDateFormatting(time)}
            </span>
        </li>
    );
};

export default MessageTemplate;
