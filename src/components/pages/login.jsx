import { Link } from "react-router-dom";
import styles from "../styles/login.module.css";

const login = () => {

    

	return (
		<div className={styles.login}>
			<h2 className={styles.title}>Log-in / Sign up Page</h2>
			<form className={styles["form-login"]} action="login-box">
				<label className={styles["login-label"]} for="username">
					Email
				</label>
				<input className={styles["login-input"]} type="text" />
				<label className={styles["login-label"]} for="password">
					Password
				</label>
				<input className={styles["login-input"]} type="text" />
				<button className={styles["login-btn"]}>login</button>
				<div className={styles["login-box"]}>
					<a className={styles["login-link"]} href="a" rel="noopener">
						forgot password
					</a>
					<span className={styles["login-span"]}>/</span>
					<Link to={"./register"}>
						<a className={styles["login-link"]} href="a" rel="noopener">
							sign up
						</a>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default login;
