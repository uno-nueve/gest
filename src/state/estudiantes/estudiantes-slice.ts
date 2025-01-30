import { TEstudiante } from "@/types/estudiante";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EstudiantesState {
    data: TEstudiante[];
}

const initialState: EstudiantesState = {
    data: [],
};

export const estudiantesSlice = createSlice({
    name: "estudiantes",
    initialState,
    reducers: {
        indexEstudiantes: (state, action: PayloadAction<TEstudiante[]>) => {
            state.data = action.payload;
        },
    },
});

export const { indexEstudiantes } = estudiantesSlice.actions;
export default estudiantesSlice.reducer;
