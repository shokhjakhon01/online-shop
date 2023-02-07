import { useCallback } from "react";
import { useSelector } from "react-redux";
import classes from "../styles/register.module.css";

const ValidationError = () => {
	const { error } = useSelector((state) => state.auth);

	const errorMessage = useCallback(() => {
		return Object.keys(error).map((name) => {
			const msg = error[name].join(", ");
			return `${name} ${msg}`;
		});
	}, [error]);

	return (
		error !== null &&
		errorMessage().map((error) => (
			<div className={classes.error} key={error}>
				<h3 className={classes.title2}>{error}</h3>;
			</div>
		))
	);
};

export default ValidationError;
