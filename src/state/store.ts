import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "./select/select-slice";
import tempReducer from "./temp/temp-slice";

export const store = configureStore({
    reducer: {
        select: selectReducer,
        temp: tempReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
