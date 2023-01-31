import { Link, useNavigate } from "react-router-dom";

const Valodation = ({ loggedIn, setLoggedIn }) => {
	const navigate = useNavigate();

	const logOuthandler = () => {
		navigate("/login");
		setLoggedIn(false);
		localStorage.removeItem('token')
	};
	return (
		<nav>
			<ul id="MenuItems">
				<Link to={"./"}>
					<li>
						<a href="index.html">Home</a>
					</li>
				</Link>
				<Link to={"./products"}>
					<li>
						<a href="product.html">Products</a>
					</li>
				</Link>
				{loggedIn ? (
					<Link to={"./account"}>
						<li>
							<a href="account.html">account</a>
						</li>
					</Link>
				) : (
					<Link to={"./login"}>
						<li>
							<a href="account.html">Login</a>
						</li>
					</Link>
				)}
				{loggedIn ? (
					<li onClick={logOuthandler}>
						<a href="#">Log Out</a>
					</li>
				) : (
					<Link to={"./register"}>
						<li>
							<a href="account.html">Register</a>
						</li>
					</Link>
				)}
			</ul>
		</nav>
	);
};

export default Valodation;
