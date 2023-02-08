import React from "react";
import { useSelector } from "react-redux";
import AllProduct from "./allProduct";
import Loader from "./loader";

const AllProducts = () => {
	const { isloading, cards } = useSelector((state) => state.cards);

	if (isloading) {
		return <Loader />;
	}

	return (
		<div className="row">
			{cards.map((product, i) => (
				<AllProduct key={i} product={product} />
			))}
		</div>
	);
};

export default AllProducts;
