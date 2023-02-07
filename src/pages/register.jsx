import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ValidationError from "../components/validation-error";
import AuthService from "../service/auth";
import { signUserFailore, signUserStart, signUserSuccess } from "../slice/auth";
import classes from "../styles/register.module.css";
import { InputUI } from "../ui";

const Register = () => {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const { isLoading, loggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const submitHandler = async (e) => {
		e.preventDefault();

		const user = {
			username,
			email,
			password,
		};

		dispatch(signUserStart());

		try {
			const responce = await AuthService.userRegister(user);
			dispatch(signUserSuccess(responce.user));
			navigate("/");
		} catch (error) {
			dispatch(signUserFailore(error.response.data.errors));
		}

		setEmail("");
		setPassword("");
		setUsername("");
	};

	useEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn]);

	return (
		<section className={classes.register}>
			<h2 className={classes.register__title}>Sign up Page</h2>
			<ValidationError />
			<form className={classes.register__form} onSubmit={submitHandler}>
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

				<button
					type="submit"
					disabled={isLoading}
					className={classes.register__btn}>
					{isLoading ? "loading..." : "register"}
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
