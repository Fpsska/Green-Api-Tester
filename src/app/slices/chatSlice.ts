import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { chatSliceTypes } from 'types/chatSliceTypes';

// /. imports

const initialState: chatSliceTypes = {
    recipientPhoneNumber: '',
    messageValue: '',
    requestError: null
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
        }
    }
});

export const { setRecipientPhoneNumber, setMessageValue, setRequestError } =
    chatSlice.actions;

export default chatSlice.reducer;
