import { useContext } from "react";
import { useSelector } from "react-redux";
import { ModalContext } from "../context/modal";
import styles from "../styles/account.module.css";

const AdminUser = () => {
	const { setModalActive } = useContext(ModalContext);

	const { user } = useSelector((state) => state.auth);

    

	return (
		<div className={styles["admin-user"]}>
			<div>
				<img
					className={styles["admin-image"]}
					width={"300px"}
					height={"300px"}
					src={user.image}
					alt="profile"
				/>
			</div>
			<div className={styles["admin-content"]}>
				<h3>Hush kelibsiz !!</h3>
				<h4>Username: {user.username} </h4>
				<p>Bio: {user.bio}</p>
				<p>Bio: {user.email}</p>
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
