import React from "react";

const AllProduct = ({ product }) => {
	return (
		<div className="col-4">
			<img
				style={{ width: "292px", height: "292px" }}
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
			<p>${product.price}</p>
		</div>
	);
};

export default AllProduct;
