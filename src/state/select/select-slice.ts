import { createSlice } from "@reduxjs/toolkit";

export interface SelectState {
    isOpen: boolean;
    curso: string;
}

const initialState: SelectState = {
    isOpen: false,
    curso: "",
};

export const selectSlice = createSlice({
    name: "select",
    initialState,
    reducers: {
        toggle: (state) => {
            return { ...state, isOpen: !state.isOpen };
        },
    },
});

export const { toggle } = selectSlice.actions;
export default selectSlice.reducer;
