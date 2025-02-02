import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TSession = {
    name: string;
    email: string;
    exp: number;
    picture: string;
};

export interface SessionState {
    session?: TSession;
}

const initialState: SessionState = {
    session: undefined,
};

export const sesionSlice = createSlice({
    name: "session",
    initialState,
    reducers: {
        setSession: (state, action: PayloadAction<TSession>) => {
            localStorage.setItem("session", JSON.stringify(action.payload));
            return { ...state, session: action.payload };
        },
        removeSession: (state) => {
            localStorage.removeItem("session");
            state.session = undefined;
        },
    },
});

export const { setSession, removeSession } = sesionSlice.actions;
export default sesionSlice.reducer;
