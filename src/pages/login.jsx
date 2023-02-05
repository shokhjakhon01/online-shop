import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/loggedIn";
import styles from "../styles/login.module.css";
import { InputUI } from "../ui";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState([]);
	const navigate = useNavigate();
	const { setLoggedIn } = useContext(LoggedInContext);

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

			res && setIsLoading(false);
			setEmail("");
			setPassword("");
			if (responce.status === 200) {
				setLoggedIn(true);
				navigate("/");
				localStorage.setItem("token", res.user.token);
			} else {
				const errors = Object.keys(res.errors).map((name) => {
					return `${name} ${res.errors[name].join(", ")}`;
				});
				console.log(errors);

				setErrorMessage(errors);
				setError(true);
			}
		};

		fatchLogin();
	};

	return (
		<div className={styles.login}>
			<h2 className={styles.title}>Log in Page</h2>

			<form className={styles["form-login"]} onSubmit={onSubmitHandler}>
				{error ? (
					<div className={styles.error}>
						{errorMessage.map((item) => {
							return <h3 className={styles.title2}>{item}</h3>;
						})}
					</div>
				) : null}

				<InputUI
					label={"Email"}
					value={email}
					setState={setEmail}
					type={"email"}
				/>

				<InputUI
					label={"Password"}
					value={password}
					setState={setPassword}
					type={"password"}
				/>

				<button type="submit" className={styles["login-btn"]}>
					{isLoading ? "login..." : "login"}
				</button>

				<div className={styles["login-box"]}>
					<p>If you haven't an account ?</p>

					<Link className={styles["login-link"]} to={"./register"}>
						sign up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
