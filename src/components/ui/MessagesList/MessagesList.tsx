import React, { forwardRef } from 'react';

import { Imessage } from 'types/chatSliceTypes';

import MessageTemplate from './MessageTemplate';

import './messages-list.scss';

// /. imports

interface propTypes {
    additionalClass?: string;
    data: Imessage[];
}

// /. interfaces

const MessagesList = forwardRef<HTMLUListElement, propTypes>((props, ref) => {
    const { additionalClass, data } = props;

    return (
        <ul
            ref={ref}
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
});

MessagesList.displayName = 'MessagesList';

export default MessagesList;
