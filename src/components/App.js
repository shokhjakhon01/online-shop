import { Route, Routes } from "react-router-dom";

import { Main, Footer, Login, Register, Account, Navbar, Posts } from "./index";

import ProductCategory from "../pages/productCategories";
import Single from "../pages/single";
import NotFount from "../pages/notFount";
import AuthService from "../service/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUserSuccess } from "../slice/auth";
import { getItem } from "../helpers/persistance";

const App = () => {
	const dispatch = useDispatch();

	const getUser = async () => {
		const responce = await AuthService.getUser();

		try {
			dispatch(signUserSuccess(responce.user));
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const token = getItem("token");

		if (token) {
			getUser();
		}
	}, []);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/account" element={<Account />} />
				<Route path="/:id" element={<ProductCategory />} />
				<Route path="/products/:id" element={<Single />} />
				<Route path="/account/posts" element={<Posts />} />
				<Route path="*" element={<NotFount />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
