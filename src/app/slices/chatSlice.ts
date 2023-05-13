import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { chatSliceTypes } from 'types/chatSliceTypes';

// /. imports

const initialState: chatSliceTypes = {
    recipientPhoneNumber: '',
    messageValue: ''
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
        }
    }
});

export const { setRecipientPhoneNumber, setMessageValue } = chatSlice.actions;

export default chatSlice.reducer;
