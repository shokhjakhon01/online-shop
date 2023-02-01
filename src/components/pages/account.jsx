import { useEffect, useState } from "react";
import AdminActive from "../admin-active";
import AdminPay from "../admin-pay";
import AdminUser from "../admin-user";
import styles from "../styles/account.module.css";
import { dataAccountBtn } from "../../service/data";
import { useNavigate } from "react-router-dom";

const Account = () => {
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

	const btnHandler = (e) => {
		setValue(e.target.dataset.id);
		
		if (+value === 2) {
			navigate("/account/posts");
		}
	};

	const fetchUsers = async () => {
		const token = localStorage.getItem("token");

		const response = await fetch("https://api.realworld.io/api/user", {
			headers: { Authorization: `Token ${token}` },
		});
		const user = await response.json();

		setState([user]);
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className="container">
			<div className={styles.admin}>
				<div className={styles["btn-group"]}>
					{dataAccountBtn.map((btn) => {
						return (
							<button
								data-id={btn.id}
								onClick={btnHandler}
								key={btn.id}
								className={styles["admin-btn"]}>
								{btn.value}
							</button>
						);
					})}
				</div>

				<AdminUser state={state} />

				<AdminActive />

				<AdminPay />
			</div>
		</div>
	);
};

export default Account;
