import { useContext, useState } from "react";
import AdminActive from "../components/admin-active";
import AdminPay from "../components/admin-pay";
import AdminUser from "../components/admin-user";
import styles from "../styles/account.module.css";
import { dataAccountBtn } from "../service/data";
import { useNavigate } from "react-router-dom";
import ButtonAdmin from "../components/button-admin";
import { ModalContext } from "../context/modal";
import Modal from "../components/modal";

const Account = () => {
	const [value, setValue] = useState(1);
	const navigate = useNavigate();
	const { modalActive, setModalActive } = useContext(ModalContext);

	const btnHandler = (e) => {
		setValue(e.target.dataset.id);

		if (+value === 2) {
			navigate("/account/posts");
		}
    };
    


	if (modalActive) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "auto";
	}

	const modalCloseHandler = (e) => {
		setModalActive(false);
	};

	return (
		<div className="container">
			<div className={styles.admin}>
				<ButtonAdmin
					dataAccountBtn={dataAccountBtn}
					btnHandler={btnHandler}
				/>

				<AdminUser />

				<AdminActive />

                <AdminPay />
                
                {modalActive ? <Modal /> : null}
                
				{modalActive ? (
					<div onClick={modalCloseHandler} className="overlay"></div>
				) : null}
			</div>
		</div>
	);
};

export default Account;
