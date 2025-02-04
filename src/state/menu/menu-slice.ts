import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MenuState {
    visible: boolean;
}

const initialState: MenuState = {
    visible: false,
};

export const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        showMenu: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload;
        },
    },
});

export const { showMenu } = menuSlice.actions;
export default menuSlice.reducer;
