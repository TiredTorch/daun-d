import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "src/types";

type InitialStateInterface = {
	isLoading?: boolean;
    userData: User | null
}

const initialState: InitialStateInterface = {
	isLoading: true,
	userData: null
};

export const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUserInfo(
			state, action: PayloadAction<User | null>
		) {
			state.userData = action.payload;
		},
		setIsLoading(
			state, action: PayloadAction<boolean>
		) {
			state.isLoading = action.payload;
		},
		clearUserInfo(
			state
		) {
			state.userData = null;
		}
	}
});

export const {
	setUserInfo,
	clearUserInfo,
	setIsLoading
} = userSlice.actions;

export const userReducer = userSlice.reducer;