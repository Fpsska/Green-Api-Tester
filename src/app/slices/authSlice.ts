import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { authSliceTypes } from 'types/authSliceTypes';

// /. imports

const initialState: authSliceTypes = {
    userIdInstance: '',
    userApiTokenInstance: ''
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
        }
    }
});

export const { setUserIdInstance, setUserApiTokenInstance } = authSlice.actions;

export default authSlice.reducer;
