import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "@/interfaces/User.interface";

interface UserState {
    selectedUser: User | null;
}

const initialState: UserState = {
    selectedUser: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action: PayloadAction<User>) => {
            state.selectedUser = action.payload;
        },
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        },
    },
});

export const { setSelectedUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
