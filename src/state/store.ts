import { configureStore } from "@reduxjs/toolkit";
import selectReducer from "./select/select-slice";
import tempReducer from "./temp/temp-slice";
import filePickerReducer from "./file-picker/file-picker-slice";
import estudiantesReducer from "./estudiantes/estudiantes-slice";

export const store = configureStore({
    reducer: {
        select: selectReducer,
        temp: tempReducer,
        file: filePickerReducer,
        estudiantes: estudiantesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["file/setImage"],
                ignoredPaths: ["file.imagen"],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
