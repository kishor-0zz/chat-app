import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import conversationsSliceReducer from "../features/conversations/conversationsSlice";
import massagesSliceReducer from "../features/massages/massagesSlice";

export const store = configureStore({
  reducer:{
    [apiSlice.reducer]:apiSlice.reducer,
    auth:authSliceReducer,
    conversations:conversationsSliceReducer,
    massages: massagesSliceReducer,
  },
  devTools:process.env.NODE_ENV !== "production",
  middleware:(getDefaultMiddlewares)=>
            getDefaultMiddlewares().concat(apiSlice.middleware)
})



