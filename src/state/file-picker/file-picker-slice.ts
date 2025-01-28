import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectState {
    imagen: File | undefined;
}

const initialState: SelectState = {
    imagen: undefined,
};

export const filePickerSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<File | undefined>) => {
            return { ...state, imagen: action.payload };
        },
    },
});

export const { setImage } = filePickerSlice.actions;
export default filePickerSlice.reducer;
