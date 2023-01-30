import { Route, Routes } from "react-router-dom";
import { Navbar } from "./index";
import { Main, Footer, Products, Login, Register } from "./index";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/products" element={<Products />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
