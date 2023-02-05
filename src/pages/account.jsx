import { useContext, useEffect, useState } from "react";
import AdminActive from "../admin-active";
import AdminPay from "../admin-pay";
import AdminUser from "../admin-user";
import styles from "../styles/account.module.css";
import { dataAccountBtn } from "../../service/data";
import { useNavigate } from "react-router-dom";
import ButtonAdmin from "../button-admin";
import Loader from "../loader";
import { ModalContext } from "../../context/modal";
import Modal from "../modal";

const Account = () => {
	const [loader, setLoader] = useState(false);
	const [state, setState] = useState([
		{
			user: {
				username: "",
				bio: "lorem10",
				image: "https://icons.veryicon.com/png/o/application/cloud-supervision-platform-vr10/admin-5.png",
				email: "lorem10@gmail.com",
			},
		},
	]);
	const [value, setValue] = useState(1);
	const navigate = useNavigate();
	const { modalActive, setModalActive } = useContext(ModalContext);

	const btnHandler = (e) => {
		setValue(e.target.dataset.id);

		if (+value === 2) {
			navigate("/account/posts");
		}
	};

	const fetchUsers = async () => {
		setLoader(true);
		const token = localStorage.getItem("token");

		const response = await fetch("https://api.realworld.io/api/user", {
			headers: { Authorization: `Token ${token}` },
		});
		const user = await response.json();

		setState([user]);
		setLoader(false);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	if (loader) {
		return <Loader />;
    }
    
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

				<AdminUser state={state} />

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
