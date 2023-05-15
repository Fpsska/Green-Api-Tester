import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSliceTypes } from 'types/authSliceTypes';

// /. imports

const initialState: authSliceTypes = {
    userIdInstance: '',
    userApiTokenInstance: '',
    isUserAuthorized: false,
    authRequestError: null
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUserIdInstance(state, action: PayloadAction<string>) {
            state.userIdInstance = action.payload;
        },
        setUserApiTokenInstance(state, action: PayloadAction<string>) {
            state.userApiTokenInstance = action.payload;
        },
        switchUserAuthorizedStatus(state, action: PayloadAction<boolean>) {
            state.isUserAuthorized = action.payload;
        },
        setAuthRequestError(state, action: PayloadAction<string | null>) {
            state.authRequestError = action.payload;
        }
    }
});

export const {
    setUserIdInstance,
    setUserApiTokenInstance,
    switchUserAuthorizedStatus,
    setAuthRequestError
} = authSlice.actions;

export default authSlice.reducer;
