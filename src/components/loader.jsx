import React from "react";
import classes from "./styles/loader.module.css";

const Loader = () => {
	return (
		<div className={classes.overlay}>
			<div className={classes["lds-hourglass"]}></div>
		</div>
	);
};

export default Loader;
