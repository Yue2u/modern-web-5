import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
    isLoggedIn: boolean;
    username: string;
};

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false, username: "" } as AuthState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isLoggedIn = true;
            state.username = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = "";
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
