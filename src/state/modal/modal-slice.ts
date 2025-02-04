import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectState {
    visible: boolean;
}

const initialState: SelectState = {
    visible: false,
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
    },
});

export const { showModal } = modalSlice.actions;
export default modalSlice.reducer;
