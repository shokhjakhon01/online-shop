import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataAccountBtn } from "../service/data";
import ButtonAdmin from "../components/button-admin";
import styles from "../styles/account.module.css";
import classes from "../styles/admin-post.module.css";
import Input from "../ui/input";
import Label from "../ui/label";


const Posts = () => {
	const [value, setValue] = useState(1);
	const navigate = useNavigate();
    
    

	const btnHandler = (e) => {
		setValue(e.target.dataset.id);

		if (+value === 2) {
			navigate("/account/posts");
		} else if (+value === 1) {
			navigate("/account");
		}
	};
	return (
		<div className="container">
			<div className={styles.admin}>
				<ButtonAdmin
					dataAccountBtn={dataAccountBtn}
					btnHandler={btnHandler}
				/>
			</div>
			<form className={classes["form-admin"]}>
				<Label
					className={classes["title"]}
					htmlFor="title"
					children={"Title"}
				/>
				<Input
					className={classes["admin-input"]}
					type="text"
					id="title"
					name="name"
				/>
				<Label
					className={classes["title"]}
					htmlFor="description"
					children={"Description"}
				/>
				<Input
					className={classes["admin-input"]}
					type="text"
					id="description"
					name="description"
				/>
				<Label
					className={classes["title"]}
					htmlFor="price"
					children={"Price"}
				/>
				<Input
					className={classes["admin-input"]}
					type="number"
					id="price"
					name="price"
				/>
				<Label
					className={classes["title"]}
					htmlFor="rating"
					children={"Rating"}
				/>
				<Input
					className={classes["admin-input"]}
					type="number"
					id="rating"
					name="rating"
				/>
				<Label
					className={classes["title"]}
					htmlFor="thumbnail"
					children={"Banner Image"}
				/>
				<Input
					className={classes["admin-input"]}
					type="text"
					id="thumbnail"
					name="thumbnail"
				/>
				<Label
					className={classes["title"]}
					htmlFor="thumbnail"
					children={"You need to input images with ','"}
				/>
				<Input
					className={classes["admin-input"]}
					type="text"
					id="thumbnail"
					name="sixImage"
				/>
				<button className={classes["admin-btn"]}>Add new post</button>
			</form>
		</div>
	);
};

export default Posts;
