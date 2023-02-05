import { useContext } from "react";
import { ModalContext } from "../context/modal";
import styles from "../styles/account.module.css";

const AdminUser = ({ state }) => {
	const { setModalActive } = useContext(ModalContext);
	return (
		<div className={styles["admin-user"]}>
			<div>
				<img
					className={styles["admin-image"]}
					width={"300px"}
					height={"300px"}
					src={state[0].user.image}
					alt="profile"
				/>
			</div>
			<div className={styles["admin-content"]}>
				<h3>Hush kelibsiz !!</h3>
				<h4>Username: {state[0].user.username} </h4>
				<p>Bio: {state[0].user.bio}</p>
				<p>Bio: {state[0].user.email}</p>
				<button
					onClick={() => setModalActive(true)}
					className={styles["admin-btn"]}>
					Malumotlarni o'zgartirish
				</button>
			</div>
		</div>
	);
};

export default AdminUser;
