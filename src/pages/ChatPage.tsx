import React, { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { setMessageValue, setReceivedMessages } from 'app/slices/chatSlice';

import { useFetchApi } from 'utils/hooks/useFetchApi';

import { makeStringReplacement } from 'utils/helpers/makeStringReplacement';

import MessagesList from 'components/ui/MessagesList/MessagesList';

// /. imports

const ChatPage: React.FC = () => {
    const {
        requestError,
        receivedMessages,
        recipientPhoneNumber,
        messageValue,
        isMessageSended
    } = useAppSelector(state => state.chatSlice);

    const { userIdInstance, userApiTokenInstance } = useAppSelector(
        state => state.authSlice
    );

    const dispatch = useAppDispatch();
    const { fetchRequest } = useFetchApi();

    // /. hooks

    useEffect(() => {
        if (!isMessageSended) return;

        const getIncomingMessages = async (): Promise<any> => {
            const receive_notice_url = `${process.env.REACT_APP_GREEN_API_URL}/waInstance${userIdInstance}/receiveNotification/${userApiTokenInstance}`;

            try {
                const receivedNoticeResponse = await fetchRequest(
                    receive_notice_url,
                    'GET'
                );
                // console.log('receivedNoticeResponse:', receivedNoticeResponse);

                if (!receivedNoticeResponse) return;

                const senderNumber = makeStringReplacement(
                    receivedNoticeResponse.body.senderData?.sender
                );
                const chatId = makeStringReplacement(
                    receivedNoticeResponse.body?.chatId
                );

                const isIncomingMessage =
                    receivedNoticeResponse.body.typeWebhook ===
                    'incomingMessageReceived';

                if (isIncomingMessage) {
                    // handle only incoming messages
                    dispatch(
                        setReceivedMessages({
                            id: receivedNoticeResponse.receiptId,
                            senderName:
                                receivedNoticeResponse.body.senderData
                                    .senderName || senderNumber,
                            message:
                                receivedNoticeResponse.body.messageData
                                    .textMessageData.textMessage,
                            time: receivedNoticeResponse.body.timestamp
                        })
                    );
                }

                if (chatId === recipientPhoneNumber) {
                    // handle messages from yourself
                    dispatch(
                        setReceivedMessages({
                            id: receivedNoticeResponse.receiptId,
                            senderName: 'Me',
                            message: messageValue,
                            time: receivedNoticeResponse.body.timestamp
                        })
                    );
                }

                const { receiptId } = receivedNoticeResponse;
                const delete_notice_url = `${process.env.REACT_APP_GREEN_API_URL}/waInstance${userIdInstance}/deleteNotification/${userApiTokenInstance}/${receiptId}`;

                const deletedNoticeResponse = await fetchRequest(
                    delete_notice_url,
                    'DELETE'
                );
                // console.log('deletedNoticeResponse:', deletedNoticeResponse);
            } finally {
                dispatch(setMessageValue(''));
                console.log('=== Ending of handling notice events ===');
            }
        };

        const intervalTime = 5000;

        const fetchTnterval = setInterval(() => {
            getIncomingMessages();
        }, intervalTime);

        return () => clearInterval(fetchTnterval);
    }, [
        isMessageSended,
        userIdInstance,
        userApiTokenInstance,
        messageValue,
        recipientPhoneNumber
    ]);

    // /. effects

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
                            <MessagesList
                                data={receivedMessages}
                                additionalClass="chat-section__messages-list"
                            />
                        </div>
                    )}
                </>
            </div>
        </section>
    );
};

export default ChatPage;
