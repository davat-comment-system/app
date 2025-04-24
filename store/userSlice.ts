import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "@/interfaces/User.interface";

interface UserState {
    selectedUser: User | null;
}


const cUser = typeof window !== 'undefined' ? window.localStorage.getItem("current-user") : null;

const initialState: UserState = {
    selectedUser: cUser ? JSON.parse(cUser) : null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setSelectedUser: (state, action: PayloadAction<User>) => {
            state.selectedUser = action.payload;
            localStorage.setItem("current-user", JSON.stringify(action.payload));
        },
        clearSelectedUser: (state) => {
            state.selectedUser = null;
            localStorage.removeItem("current-user");
        },
    },
});

export const { setSelectedUser, clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
