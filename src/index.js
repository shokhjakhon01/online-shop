import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import LoggedInProvider from "./context/loggedIn";
import ModalProvider from "./context/modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<LoggedInProvider>
			<ModalProvider>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</ModalProvider>
		</LoggedInProvider>
	</BrowserRouter>
);
