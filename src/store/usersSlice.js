import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./usersState";
export const usersSlice = createSlice({
    name:"users",
    initialState:InitialState,
    reducers:{
        setUsersList(state, action){            
            state.usersDetails.data = action.payload;
        },
        activeUsersDetailsLoading(state){
            state.usersDetails.loading = true
        },
        InactiveUsersDetailsLoading(state){
            state.usersDetails.loading = false
        }
    }
})

export const {setUsersList, activeUsersDetailsLoading, InactiveUsersDetailsLoading} = usersSlice.actions;
export default usersSlice.reducer;