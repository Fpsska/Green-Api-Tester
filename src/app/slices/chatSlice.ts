import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { chatSliceTypes, Imessage } from 'types/chatSliceTypes';

// /. imports

const initialState: chatSliceTypes = {
    recipientPhoneNumber: '',
    messageValue: '',
    requestError: null,
    receivedMessages: [],
    isMessageSended: false
};

const chatSlice = createSlice({
    name: 'chatSlice',
    initialState,
    reducers: {
        setRecipientPhoneNumber(state, action: PayloadAction<string>) {
            state.recipientPhoneNumber = action.payload;
        },
        setMessageValue(state, action: PayloadAction<string>) {
            state.messageValue = action.payload;
        },
        setRequestError(state, action: PayloadAction<string | null>) {
            state.requestError = action.payload;
        },
        setReceivedMessages(state, action: PayloadAction<Imessage>) {
            state.receivedMessages.push(action.payload);
        },
        switchMessageSendedStatus(state, action: PayloadAction<boolean>) {
            state.isMessageSended = action.payload;
        }
    }
});

export const {
    setRecipientPhoneNumber,
    setMessageValue,
    setRequestError,
    setReceivedMessages,
    switchMessageSendedStatus
} = chatSlice.actions;

export default chatSlice.reducer;
