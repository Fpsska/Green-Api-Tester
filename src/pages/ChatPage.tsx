import React from 'react';

import { useAppSelector } from 'app/hooks';

import MessagesList from 'components/ui/MessagesList/MessagesList';

// /. imports

const ChatPage: React.FC = () => {
    const { requestError } = useAppSelector(state => state.chatSlice);

    // /. hooks

    return (
        <section className="chat-section">
            <div className="chat-section__wrapper">
                <h2 className="section-title">ChatPage</h2>
                <>
                    {requestError ? (
                        <p className="error-markup">
                            <b>Error:</b> {requestError}
                        </p>
                    ) : (
                        <div className="chat-section__preview">
                            <MessagesList additionalClass="chat-section__messages-list" />
                        </div>
                    )}
                </>
            </div>
        </section>
    );
};

export default ChatPage;
