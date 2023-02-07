import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/login.module.css";
import { InputUI } from "../ui";

// IMPORT WITH REDUX ...
import { useDispatch, useSelector } from "react-redux";
import { signUserFailore, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";
import ValidationError from "../components/validation-error";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoading, loggedIn } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitHandler = async (e) => {
		e.preventDefault();

		const user = { email, password };
		dispatch(signUserStart());

		try {
            const responce = await AuthService.userLogin(user);
            
			dispatch(signUserSuccess(responce.user));
			navigate("/");
		} catch (error) {
			dispatch(signUserFailore(error.response.data.errors));
		}

		setEmail("");
		setPassword("");
	};

	useEffect(() => {
		if (loggedIn) {
			navigate("/");
		}
	}, [loggedIn]);

	return (
		<div className={styles.login}>
			<h2 className={styles.title}>Log in Page</h2>

            <ValidationError />
            
			<form className={styles["form-login"]} onSubmit={onSubmitHandler}>
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

				<button
					type="submit"
					disabled={isLoading}
					className={styles["login-btn"]}>
					{isLoading ? "loading..." : "login"}
				</button>

				<div className={styles["login-box"]}>
					<p>If you haven't an account ?</p>

					<Link className={styles["login-link"]} to={"/register"}>
						sign up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
