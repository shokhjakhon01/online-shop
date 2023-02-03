import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import LoggedInProvider from "./context/loggedIn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<LoggedInProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</LoggedInProvider>
	</BrowserRouter>
);
