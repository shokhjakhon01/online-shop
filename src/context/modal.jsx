import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
	const [modalActive, setModalActive] = useState(false);
	return (
		<ModalContext.Provider
			value={{
				modalActive,
				setModalActive,
			}}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
