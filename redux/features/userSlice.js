import { createSlice } from '@reduxjs/toolkit';

const initialState = { userData: {} }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSet: (state, action) => {
            state.userData = action.payload;
        }
    }
});

export const { userSet } = userSlice.actions;
export default userSlice.reducer;