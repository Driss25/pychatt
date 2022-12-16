import {
    createSlice
} from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        darkMode: false
    },
    reducers: {
        changeMode: state => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {
    changeMode
} = modeSlice.actions
export default modeSlice.reducer