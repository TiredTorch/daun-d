import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	TypedUseSelectorHook, useDispatch, useSelector
} from "react-redux";

import { userReducer, userSlice } from "./slices";

const reducers = {
	[userSlice.name]: userReducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const store = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([])
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootReduxState = ReturnType<typeof store.getState>;
