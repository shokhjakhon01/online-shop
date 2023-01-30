import { Valodation } from "./index";

const Navbar = ({ loggedIn, setLoggedIn }) => {
	return (
		<div className="container">
			<div className="navbar">
				<div className="logo">
					<a href="index.html">
						<img
							src="https://i.ibb.co/kDVwgwp/logo.png"
							alt="RedStore"
							width="125px"
						/>
					</a>
				</div>
				<Valodation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
				<a href="cart.html">
					<img
						src="https://i.ibb.co/PNjjx3y/cart.png"
						alt=""
						width="30px"
						height="30px"
					/>
					<span>0</span>
				</a>
				<img
					src="https://i.ibb.co/6XbqwjD/menu.png"
					alt=""
					className="menu-icon"
				/>
			</div>
		</div>
	);
};

export default Navbar;
