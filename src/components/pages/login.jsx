import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const onSubmitHandler = (e) => {
		e.preventDefault();

		let user = {
			user: {
				email,
				password,
			},
		};

		const fatchLogin = async () => {
			setIsLoading(true);
			const responce = await fetch(
				"https://api.realworld.io/api/users/login",
				{
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(user),
				}
			);

            const res = await responce.json();
			console.log(res);

			res && setIsLoading(false);
			setEmail("");
            setPassword("");
            
            navigate('/')
		};

		fatchLogin();
	};

	return (
		<div className={styles.login}>
			<h2 className={styles.title}>Log-in Page</h2>
			<form
				className={styles["form-login"]}
				action="login-box"
				onSubmit={onSubmitHandler}>
				<label className={styles["login-label"]} htmlFor="username">
					Email
				</label>
				<input
					value={email}
					className={styles["login-input"]}
					type="text"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label className={styles["login-label"]} htmlFor="password">
					Password
				</label>
				<input
					value={password}
					className={styles["login-input"]}
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" className={styles["login-btn"]}>
					{isLoading ? "login..." : "login"}
				</button>
				<div className={styles["login-box"]}>
					<a className={styles["login-link"]} href="a" rel="noopener">
						If you haven't an account ?
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

export default Login;
