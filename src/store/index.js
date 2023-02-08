import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import CardReducer from "../slice/cards";

export default configureStore({
	reducer: {
		auth: AuthReducer,
		cards: CardReducer,
		devTools: process.env.NODE_ENV !== "production",
	},
});
