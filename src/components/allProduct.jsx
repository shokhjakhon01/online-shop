import React from "react";
import { Link } from "react-router-dom";
import classes from '../components/styles/allProduct.module.css'

const AllProduct = ({ product }) => {
	return (
		<Link to={`/products/${product.id}`} className={`col-4 ${classes.product__card}`}>
			<img
				style={{ width: "292px", height: "292px", borderRadius:'10px' }}
				src={product.thumbnail}
				alt=""
			/>
			<h4>{product.title}</h4>
			<div className="rating">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="far fa-star"></i>
			</div>
		<div>	<p>${product.price}</p>
			<p>cart</p></div>
		</Link>
	);
};

export default AllProduct;
