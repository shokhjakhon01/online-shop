import styles from "../styles/account.module.css";

const AdminPay = () => {
	return (
		<div className={styles["admin-pay"]}>
			<div className={styles["card-header"]}>
				<img
					width="40"
					height="40"
					src="https://cdn-icons-png.flaticon.com/512/9418/9418578.png"
					alt=""
				/>
				<h4 className={styles.title}> Pul Yechish !</h4>
			</div>
			<p>
				Diqqat! karta raqamingizni xato kiritmaganingizga amin bo'ling
				chunki o'zgartirilmaydi!
			</p>
			<form className={styles["admin-form"]}>
				<label className={styles["admin-label"]} htmlFor="card">
					Kartangizni kiriting :
				</label>
				<input
					min={0}
					max={16}
					className={styles["admin-input"]}
					type="number"
					id="card"
				/>
				<label className={styles["admin-label"]} htmlFor="sum">
					Summa kiriting :
				</label>
				<input
					min={0}
					max={16}
					className={styles["admin-input"]}
					type="number"
					id="sum"
				/>
				<button className={styles["btn-send"]} type="submit">
					YUBORISH
				</button>
			</form>
		</div>
	);
};

export default AdminPay;
