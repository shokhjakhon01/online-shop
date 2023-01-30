import styles from "../styles/login.module.css";

const login = () => {
	return (
		<div>
			<h2 className={styles.title}>Log-in / Sign up Page</h2>
			<form className={styles["form-login"]} action="login-box">
				<label className={styles["login-label"]} for="username">
					username or email
				</label>
				<input className={styles["login-input"]} type="text" />
				<label className={styles["login-label"]} for="password">
					password
				</label>
				<input className={styles["login-input"]} type="text" />
				<button className={styles["login-btn"]}>login</button>
				<div className={styles["login-box"]}>
					<a className={styles["login-link"]} href="a" rel="noopener">
						forgot password
					</a>
					<span className={styles['login-span']}>/</span>
					<a className={styles["login-link"]} href="a" rel="noopener">
						sign up
					</a>
				</div>
			</form>
		</div>
	);
};

export default login;
