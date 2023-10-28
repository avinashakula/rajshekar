import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";
import welcomeReducer from "./welcomeSlice";
export const store = configureStore({
    reducer:{
        welcome:welcomeReducer,
        avinash:userReducer
    }
})
