import styles from "./styles/account.module.css";

const ButtonAdmin = ({ btnHandler, dataAccountBtn }) => {

    console.log();
	return (
		<div className={styles["btn-group"]}>
			{dataAccountBtn.map((btn) => {
				return (
					<button
						data-id={btn.id}
						onClick={btnHandler}
						key={btn.id}
						className={styles["admin-btn"]}>
						{btn.value}
					</button>
				);
			})}
		</div>
	);
};

export default ButtonAdmin;
