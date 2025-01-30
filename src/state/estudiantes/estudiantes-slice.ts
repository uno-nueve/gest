import { TEstudiante } from "@/types/estudiante";
import { ESTUDIANTES } from "@/utils/urls";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface EstudiantesState {
    data: TEstudiante[];
}

const initialState: EstudiantesState = {
    data: [],
};

export const getEstudiante = createAsyncThunk("estudiantes/getEstudiante", async (id: string) => {
    const res = await axios.get(`${ESTUDIANTES}/${id}`);
    return res.data;
});

export const estudiantesSlice = createSlice({
    name: "estudiantes",
    initialState,
    reducers: {
        indexEstudiantes: (state, action: PayloadAction<TEstudiante[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getEstudiante.fulfilled, (state, action) => {
            state.data = [action.payload];
        });
    },
});

export const { indexEstudiantes } = estudiantesSlice.actions;
export default estudiantesSlice.reducer;
