import { Valodation } from "./index";
import { logo, addCard, menu } from "../constants";
import { Link } from "react-router-dom";
import CartDropdown from "./cart-dropdown/CartDropdown.component";
import { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdownHandler = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <div className="container">
      <div className="navbar">
        <Link className="logo" to={"/"}>
          <img src={logo} alt="RedStore" width="125px" />
        </Link>
        <Valodation />
        <Link onClick={showDropdownHandler} className="navbar-link" to={"/"}>
          <img src={addCard} alt="add-card" width="30px" height="30px" />
          <span className="navbar-counter">0</span>
        </Link>
        {dropdown && <CartDropdown />}
        <img src={menu} alt="menu" className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
