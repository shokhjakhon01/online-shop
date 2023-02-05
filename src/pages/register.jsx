import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/loggedIn";
import classes from "../styles/register.module.css";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [erorMsg, setErrorMsg] = useState([]);
	const navigate = useNavigate();
	const { setLoggedIn } = useContext(LoggedInContext);

	const emailEventHandler = (e) => {
		setEmail(e.target.value);
	};
	const usernameEventHandler = (e) => {
		setUsername(e.target.value);
	};
	const passwordEventHandler = (e) => {
		setPassword(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const newUser = {
			user: {
				username,
				email,
				password,
			},
		};

		try {
			(async function () {
				const res = await fetch(`https://api.realworld.io/api/users/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newUser),
				});

				const result = await res.json();

				console.log(result);
				if (res.status === 200) {
					setLoggedIn(true);
					navigate("/");
					localStorage.setItem("token", result.user.token);
				} else {
					const error = Object.keys(result.errors).map((name) => {
						return `${name} ${result.errors[name].join(", ")}`;
					});
					setErrorMsg(error);
				}
			})();
		} catch (error) {
			console.log(error);
		}
		setEmail("");
		setPassword("");
		setUsername("");
	};

	return (
		<section className={classes.register}>
			<h2 className={classes.register__title}>Sign up Page</h2>
			<form className={classes.register__form} onSubmit={submitHandler}>
				{erorMsg ? (
					<div className={classes.error}>
						{erorMsg.map((eror) => {
							return <h3 className={classes.title2}>{eror}</h3>;
						})}
					</div>
				) : null}
				<label className={classes.register__label} htmlFor="email">
					email
				</label>
				<input
					id="email"
					className={classes.register__input}
					type="text"
					onChange={emailEventHandler}
					value={email}
				/>
				<label className={classes.register__label} htmlFor="username">
					username
				</label>
				<input
					id="username"
					className={classes.register__input}
					type="text"
					onChange={usernameEventHandler}
					value={username}
				/>
				<label className={classes.register__label} htmlFor="password">
					password
				</label>
				<input
					id="password"
					className={classes.register__input}
					type="password"
					onChange={passwordEventHandler}
					value={password}
				/>
				<button className={classes.register__btn}>Sign up</button>
				<div className={classes.register__box}>
					<a href="#!" target="_blank" rel="noopener">
						forgot password
					</a>
					<span className={classes.register__span}>/</span>
					<a
						className={classes.register__link}
						href="#!"
						target="_blank"
						rel="noopener">
						login
					</a>
				</div>
			</form>
		</section>
	);
};

export default Register;
