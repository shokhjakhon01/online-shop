import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import ModalProvider from "./context/modal";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<ModalProvider>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</ModalProvider>
		</Provider>
	</BrowserRouter>
);
