import { Valodation } from "./index";
import { logo, addCard, menu } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container">
			<div className="navbar">
				<Link className="logo" to={"/"}>
					<img src={logo} alt="RedStore" width="125px" />
				</Link>

				<Valodation />

				<Link className="navbar-link" to={'/'}>
					<img src={addCard} alt="add-card" width="30px" height="30px" />
					<span className="navbar-counter">0</span>
				</Link>

				<img src={menu} alt="menu" className="menu-icon" />
			</div>
		</div>
	);
};

export default Navbar;
