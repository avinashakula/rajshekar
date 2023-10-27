import { createSlice } from "@reduxjs/toolkit";

export const welcomeNoteSlice = createSlice({
    name:"welcome",
    initialState: {
        name: "Guest"
    },
    reducers:{
        setName(state, action){
            state.name = action.payload;
        }
    }
})

export const {setName} = welcomeNoteSlice.actions;
export default welcomeNoteSlice.reducer;