import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { LoggedInContext } from "../context/loggedIn";
import { Account, Navbar, Posts } from "./index";
import { Main, Footer, Products, Login, Register } from "./index";
import ProductCategory from "./pages/productCategories";

const App = () => {
	const token = localStorage.getItem("token");
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

	useEffect(() => {
		if (token) {
			setLoggedIn(true);
		}
	}, [token]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products" element={<Products />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/account" element={<Account />} />
				<Route path="/:id" element={<ProductCategory />} />
				<Route
					path="/account/posts"
					element={<Posts />}
				/>
			</Routes>
			<Footer />
		</>
	);
};

export default App;
