import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataAccountBtn } from "../../service/data";
import ButtonAdmin from "../button-admin";
import styles from "../styles/account.module.css";
import classes from "../styles/admin-post.module.css";



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
				<label className={classes["title"]} htmlFor="title">
					Title
				</label>
				<input className={classes["admin-input"]} type="text" id="title" />
				<label className={classes["title"]} htmlFor="description">
					Description
				</label>
				<input
					className={classes["admin-input"]}
					type="text"
					id="description"
				/>
				<label className={classes["title"]} htmlFor="price">
					Price
				</label>
				<input
					className={classes["admin-input"]}
					type="number"
					id="price"
				/>
				<label className={classes["title"]} htmlFor="rating">
					Rating
				</label>
				<input
					className={classes["admin-input"]}
					type="number"
					id="rating"
				/>
				<label className={classes["title"]} htmlFor="thumbnail">
					Banner Image
				</label>
				<input
					className={classes["admin-input"]}
					type="text"
					id="thumbnail"
				/>
				<label className={classes["title"]} htmlFor="thumbnail">
					You need to input images with ','
				</label>
				<input
					className={classes["admin-input"]}
					type="text"
					id="thumbnail"
				/>
				<button className={classes['admin-btn']}>Add new post</button>
			</form>
		</div>
	);
};

export default Posts;
