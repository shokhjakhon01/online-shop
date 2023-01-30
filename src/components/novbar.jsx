const Navbar = () => {
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
					<nav>
						<ul id="MenuItems">
							<li>
								<a href="index.html">Home</a>
							</li>
							<li>
								<a href="product.html">Products</a>
							</li>
							<li>
								<a href="index.html">Contact</a>
							</li>
							<li>
								<a href="account.html">Account</a>
							</li>
						</ul>
					</nav>
					<a href="cart.html">
						<img
							src="https://i.ibb.co/PNjjx3y/cart.png"
							alt=""
							width="30px"
							height="30px"
						/>
					</a>
					<img
						src="https://i.ibb.co/6XbqwjD/menu.png"
						alt=""
						className="menu-icon"
						onclick="menutoggle()"
					/>
				</div>
			</div>
		);
};

export default Navbar;
