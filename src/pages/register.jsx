import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/loggedIn";
import classes from "../styles/register.module.css";
import { InputUI } from "../ui";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
    const [erorMsg, setErrorMsg] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const { setLoggedIn } = useContext(LoggedInContext);

	

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
                setIsLoading(true);
				const res = await fetch(`https://api.realworld.io/api/users/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newUser),
				});

				const result = await res.json();

				result && setIsLoading(false);

				if (res.status === 200) {
					setLoggedIn(true);
					navigate("/");
					localStorage.setItem("token", result.user.token);
				} else {
					const error = Object.keys(result.errors).map((name) => {
						return `${name} ${result.errors[name].join(", ")}`;
					});
					setErrorMsg(error);
					setError(true);
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
				{error ? (
					<div className={classes.error}>
						{erorMsg.map((eror) => {
							return <h3 className={classes.title2}>{eror}</h3>;
						})}
					</div>
				) : null}

				<InputUI value={email} setState={setEmail} label={"Email"} />

				<InputUI
					value={username}
					setState={setUsername}
					label={"Username"}
				/>

				<InputUI
					value={password}
					setState={setPassword}
					label={"Password"}
					type={"password"}
				/>

				<button type="submit" className={classes.register__btn}>
					{isLoading ? "register..." : "register"}
				</button>

				<div className={classes.register__box}>
					<p>If you have account please</p>

					<Link to={"/login"} className={classes.register__link}>
						Login
					</Link>
				</div>
			</form>
		</section>
	);
};

export default Register;
