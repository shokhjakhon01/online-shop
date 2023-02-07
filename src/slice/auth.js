import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance";

const initialState = {
	isLoading: false,
	loggedIn: false,
	error: null,
	user: null,
};

export const AuthSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signUserStart: (state) => {
			state.isLoading = true;
		},

		signUserSuccess: (state, action) => {
			state.isLoading = false;
			state.loggedIn = true;
            state.user = action.payload;
			setItem("token", action.payload.token);
		},

		signUserFailore: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
        },
        
        logOutUser: (state) => {
            state.user = null;
            state.loggedIn = false;
        }
	},
});

export const { signUserStart,logOutUser, signUserSuccess, signUserFailore } =
	AuthSlice.actions;
export default AuthSlice.reducer;
