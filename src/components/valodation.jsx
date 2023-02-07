import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "../helpers/persistance";

const Valodation = () => {
	const navigate = useNavigate();
    const { loggedIn } = useSelector((state) => state.auth);
    console.log(loggedIn)

	const logOuthandler = () => {
		navigate("/login");
		removeItem("token");
	};

	return (
		<nav>
			<ul id="MenuItems">
				<Link className="navbar-link" to={"/"}>
					<li>
						<i className="fa-solid fa-bag-shopping user"></i>
						<span className="user-span">Savat</span>
					</li>
				</Link>
				{loggedIn ? (
					<Link to={"./account"}>
						<li>
							<i className="fa-solid fa-user user"></i>
						</li>
					</Link>
				) : (
					<Link to={"/login"}>
						<li>
							<i className="fa-solid fa-user user"></i>
							<span className="user-span">Log in</span>
						</li>
					</Link>
				)}
				<Link to={"/"}>
					<li>
						<i className="fa-regular fa-heart user"></i>
						<span className="user-span">Fovourite</span>
					</li>
				</Link>

				{loggedIn ? (
					<li onClick={logOuthandler}>
						<i class="fa-solid fa-right-from-bracket user"></i>
						<span className="user-span">log out</span>
					</li>
				) : null}
			</ul>
		</nav>
	);
};

export default Valodation;
