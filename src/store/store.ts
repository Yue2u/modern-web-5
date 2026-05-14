import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";
import feedbackReducer from "./feedbackSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        feedback: feedbackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
