import styles from "./styles/account.module.css";

const AdminActive = ({ state }) => {
	return (
		<div className={styles["admin-activate"]}>
			<div className={styles["admin-card"]}>
				<div className={styles["card-header"]}>
					<h4 className={styles.title}>Asosiy Balance</h4>
					<img
						width="50"
						height="50"
						src="https://cdn-icons-png.flaticon.com/512/2933/2933116.png"
						alt="money"
					/>
				</div>
				<div className={styles["card-content"]}>
					<p>0</p> <span>so'm</span>
				</div>
				<p>Sizning jami daromadingiz miqdori</p>
			</div>
			<div className={styles["admin-card"]}>
				<div className={styles["card-header"]}>
					<h4 className={styles.title}>Qo'shgan po'stlaringiz</h4>
					<img
						width="50"
						height="50"
						src="https://cdn-icons-png.flaticon.com/512/3131/3131620.png"
						alt="money"
					/>
				</div>
				<div className={styles["card-content"]}>
					<p>0</p> <span>ta</span>
				</div>
				<p>Sizning jami postlaringiz miqdori</p>
			</div>
		</div>
	);
};

export default AdminActive;
