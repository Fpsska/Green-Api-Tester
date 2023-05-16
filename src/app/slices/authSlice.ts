import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSliceTypes } from 'types/authSliceTypes';

// /. imports

const storageUserAuthStatus = JSON.parse(
    localStorage.getItem('storageUserAuthStatus') || 'false'
);

const initialState: authSliceTypes = {
    userIdInstance: '',
    userApiTokenInstance: '',
    isUserAuthorized: storageUserAuthStatus,
    requestError: null
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
        setRequestError(state, action: PayloadAction<string | null>) {
            state.requestError = action.payload;
        }
    }
});

export const {
    setUserIdInstance,
    setUserApiTokenInstance,
    switchUserAuthorizedStatus,
    setRequestError
} = authSlice.actions;

export default authSlice.reducer;
