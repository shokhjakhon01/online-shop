import styles from "../styles/login.module.css";

const InputUI = ({
	value,
	setState,
	label,
	type = "text",
}) => {
	return (
		<>
			<label className={styles["login-label"]} htmlFor="username">
				{label}
			</label>
			<input
				value={value}
				className={styles["login-input"]}
				type={type}
				onChange={(e) => setState(e.target.value)}
			/>
		</>
	);
};

export default InputUI;
