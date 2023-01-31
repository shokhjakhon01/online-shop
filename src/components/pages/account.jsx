import styles from "../styles/account.module.css";

const Account = () => {
	return (
		<div className="container">
			<div className={styles.admin}>
				<div className={styles["btn-group"]}>
					<button className={styles["admin-btn"]}>My profile</button>
					<button className={styles["admin-btn"]}>Posts</button>
					<button className={styles["admin-btn"]}>Statistics</button>
				</div>
				<div className={styles["admin-user"]}>
					<div>
						<img
							width={"300px"}
							height={"300px"}
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
							alt="profile"
						/>
					</div>
					<div className={styles["admin-content"]}>
						<h3>Hush kelibsiz !!</h3>
						<h4>Username: username</h4>
						<p>
							Bio: Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Iste natus nemo hic adipisci debitis inventore.
						</p>
						<button className={styles["admin-btn"]}>
							Malumotlarni o'zgartirish
						</button>
					</div>
				</div>
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
			</div>
		</div>
	);
};

export default Account;
