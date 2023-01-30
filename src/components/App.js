import { Route, Routes } from "react-router-dom";
import { Navbar } from "./index";
import { Main, Footer } from "./index";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Main />} />
			</Routes>

			<Footer />
		</>
	);
};

export default App;
