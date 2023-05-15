import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { chatSliceTypes, Imessage } from 'types/chatSliceTypes';

// /. imports

const initialState: chatSliceTypes = {
    recipientPhoneNumber: '',
    messageValue: '',
    receivedMessages: [],
    isMessageSended: false,
    isMessageDataLoading: false
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
        setReceivedMessages(state, action: PayloadAction<Imessage>) {
            state.receivedMessages.push(action.payload);
        },
        switchMessageSendedStatus(state, action: PayloadAction<boolean>) {
            state.isMessageSended = action.payload;
        },
        switchMessageDataLoadingStatus(state, action: PayloadAction<boolean>) {
            state.isMessageDataLoading = action.payload;
        }
    }
});

export const {
    setRecipientPhoneNumber,
    setMessageValue,
    setReceivedMessages,
    switchMessageSendedStatus,
    switchMessageDataLoadingStatus
} = chatSlice.actions;

export default chatSlice.reducer;
