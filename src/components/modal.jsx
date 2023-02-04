import Input from "../ui/input";
import Label from "../ui/label";
import styles from "./styles/modal.module.css";
import close from "../assets/close.svg";
import { useContext } from "react";
import { ModalContext } from "../context/modal";

const Modal = () => {
    const { setModalActive } = useContext(ModalContext);
    
    
	return (
		<div className={styles["modal-section"]}>
			<div  className={styles["modal"]}>
				<div className={styles["modal-content"]}>
					<div className={styles["modal-header"]}>
						<h3 className={styles["modal-title"]}>
							Ma'lumotlarni o'zgartirish
						</h3>
						<img
							onClick={() => setModalActive(false)}
							className={styles["modal-img"]}
							width={24}
							height={24}
							src={close}
							alt="close-btn"
						/>
					</div>
					<div className={styles["modal-body"]}>
						<Label
							className={styles["modal-label"]}
							htmlFor={"username"}
							children={"Username"}
						/>
						<Input
							id={"username"}
							className={styles["modal-input"]}
							type={"text"}
							name={"username"}
						/>
						<Label
							className={styles["modal-label"]}
							htmlFor={"bio"}
							children={"Biography"}
						/>
						<Input
							id={"bio"}
							className={styles["modal-input"]}
							type={"text"}
							name={"bio"}
						/>
					</div>
					<div className={styles["modal-footer"]}>
						<div className={styles["btn-group"]}>
							<button
								onClick={() => setModalActive(false)}
								className={styles["modal-save"]}>
								Saqlash
							</button>

							<button
								className={styles["modal-close"]}
								onClick={() => setModalActive(false)}>
								Yopish
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
