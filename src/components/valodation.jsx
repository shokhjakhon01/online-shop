import { Link } from "react-router-dom";

const Valodation = () => {
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
				<Link to={"./login"}>
					<li>
						<a href="account.html">Login</a>
					</li>
				</Link>
				<Link to={"./register"}>
					<li>
						<a href="account.html">Register</a>
					</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Valodation;
