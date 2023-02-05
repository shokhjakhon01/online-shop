import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/loggedIn";

const Valodation = () => {
	const { loggedIn, setLoggedIn } = useContext(LoggedInContext);
	const navigate = useNavigate();

	const logOuthandler = () => {
		navigate("/login");
		setLoggedIn(false);
		localStorage.removeItem("token");
	};
	return (
		<nav>
			<ul id="MenuItems">
				<Link to={"/"}>
					<li>Home</li>
				</Link>

				<Link to={"/products"}>
					<li>Products</li>
				</Link>

				{loggedIn ? (
					<Link to={"./account"}>
						<li>account</li>
					</Link>
				) : (
					<Link to={"./login"}>
						<li>Login</li>
					</Link>
				)}

				{loggedIn ? (
					<li onClick={logOuthandler}>Log Out</li>
				) : (
					<Link to={"./register"}>
						<li>Register</li>
					</Link>
				)}
			</ul>
		</nav>
	);
};

export default Valodation;
