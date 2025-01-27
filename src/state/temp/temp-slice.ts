import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectState {
    curso: string;
    nota: number;
}

const initialState: SelectState = {
    curso: "",
    nota: 1,
};

export const tempSlice = createSlice({
    name: "temp",
    initialState,
    reducers: {
        setCurso: (state, action: PayloadAction<string>) => {
            return { ...state, curso: action.payload };
        },
        setNota: (state, action: PayloadAction<number>) => {
            return { ...state, nota: action.payload };
        },
    },
});

export const { setCurso, setNota } = tempSlice.actions;
export default tempSlice.reducer;
