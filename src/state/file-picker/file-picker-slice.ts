import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectState {
    imagen: File | null;
}

const initialState: SelectState = {
    imagen: null as File | null,
};

export const filePickerSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<File | null>) => {
            // return { ...state, imagen: action.payload };
            state.imagen = action.payload;
        },
    },
});

export const { setImage } = filePickerSlice.actions;
export default filePickerSlice.reducer;
