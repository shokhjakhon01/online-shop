import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isloading: false,
	cards: [],
	error: null,
};

export const cardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		getCardsStart: (state) => {
			state.isloading = true;
		},

		getCardsSuccess: (state, action) => {
			state.isloading = false;
			state.cards = action.payload;
		},

		getCardsFailore: (state, action) => {
			state.isloading = false;
			state.error = action.payload;
		},
	},
});

export const { getCardsStart, getCardsSuccess, getCardsFailore } =
	cardSlice.actions;

export default cardSlice.reducer;
