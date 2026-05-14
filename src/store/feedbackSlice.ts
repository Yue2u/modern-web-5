import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Review = {
    id: number;
    author: string;
    message: string;
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState: { reviews: [] as Review[], nextId: 1 },
    reducers: {
        addReview: (state, action: PayloadAction<{ author: string; message: string }>) => {
            state.reviews.push({ id: state.nextId++, ...action.payload });
        },
    },
});

export const { addReview } = feedbackSlice.actions;
export default feedbackSlice.reducer;
