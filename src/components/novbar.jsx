import { Search, Valodation } from "./index";
import { logo, menu } from "../constants";
import { Link } from "react-router-dom";


const Navbar = () => {
	return (
		<div className="container">
			<div className="navbar">
				<Link className="logo" to={"/"}>
					<img src={logo} alt="RedStore" width="170px" />
				</Link>

				<Search />

				<Valodation />

				<img src={menu} alt="menu" className="menu-icon" />
			</div>
		</div>
	);
};

export default Navbar;
