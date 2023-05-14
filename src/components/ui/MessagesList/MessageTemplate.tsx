import React from 'react';

// /. imports

interface propTypes {
    message: string;
}

// /. interfaces

const MessageTemplate: React.FC<propTypes> = ({ message }) => {
    return (
        <li className="messages-list__template">
            <p>{message}</p>
            <span className="messages-list__time">3:22 PM</span>
        </li>
    );
};

export default MessageTemplate;
