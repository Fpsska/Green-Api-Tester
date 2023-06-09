import React, { useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from 'app/hooks';

import { setMessageValue, setReceivedMessages } from 'app/slices/chatSlice';

import { useFetchApi } from 'utils/hooks/useFetchApi';

import { makeStringReplacement } from 'utils/helpers/makeStringReplacement';
import { generateUniqueID } from 'utils/helpers/generateUniqueID';

import MessagesList from 'components/ui/MessagesList/MessagesList';
import Loader from 'components/ui/Loader/Loader';

// /. imports

const ChatPage: React.FC = () => {
    const {
        receivedMessages,
        recipientPhoneNumber,
        messageValue,
        isMessageSended,
        isMessageDataLoading
    } = useAppSelector(state => state.chatSlice);

    const { userIdInstance, userApiTokenInstance, requestError } =
        useAppSelector(state => state.authSlice);

    const dispatch = useAppDispatch();
    const messageListRef = useRef<HTMLUListElement>(null!);

    const { fetchRequest } = useFetchApi();

    // /. hooks

    useEffect(() => {
        if (!isMessageSended || requestError) return;

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
                            id: generateUniqueID(),
                            senderName:
                                receivedNoticeResponse.body.senderData
                                    ?.senderName || senderNumber,
                            message:
                                receivedNoticeResponse.body.messageData
                                    .textMessageData?.textMessage || 'untitled',
                            time:
                                receivedNoticeResponse.body?.timestamp ||
                                'untitled'
                        })
                    );
                }

                if (chatId === recipientPhoneNumber) {
                    // handle messages from yourself
                    dispatch(
                        setReceivedMessages({
                            id: generateUniqueID(),
                            senderName: 'Me',
                            message: `${messageValue} *(sended by Green-API)*`,
                            time:
                                receivedNoticeResponse.body?.timestamp ||
                                'untitled',
                            isOwnMessage: true
                        })
                    );
                }

                const { receiptId } = receivedNoticeResponse;
                const delete_notice_url = `${process.env.REACT_APP_GREEN_API_URL}/waInstance${userIdInstance}/deleteNotification/${userApiTokenInstance}/${receiptId}`;

                const deletedNoticeResponse = await fetchRequest(
                    delete_notice_url,
                    'DELETE'
                );
                dispatch(setMessageValue(''));

                // console.log('deletedNoticeResponse:', deletedNoticeResponse);
            } finally {
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
        recipientPhoneNumber,
        requestError
    ]);

    useEffect(() => {
        // logic of scroll to last message

        const validCondition =
            messageListRef?.current &&
            receivedMessages.length > 0 &&
            !requestError;

        if (validCondition) {
            setTimeout(() => {
                messageListRef.current.scrollTo({
                    top: messageListRef.current.scrollHeight,
                    behavior: 'smooth'
                });
            }, 200);
        }
    }, [receivedMessages, requestError]);

    // /. effects

    return (
        <section className="chat-section">
            <div className="chat-section__wrapper">
                <h2 className="section-title">ChatPage</h2>
                <>
                    {requestError ? (
                        <>
                            {isMessageDataLoading ? (
                                <Loader />
                            ) : (
                                <p className="error-markup">
                                    <b>Error:</b>
                                    {requestError}
                                </p>
                            )}
                        </>
                    ) : (
                        <div className="chat-section__preview">
                            <MessagesList
                                ref={messageListRef}
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
