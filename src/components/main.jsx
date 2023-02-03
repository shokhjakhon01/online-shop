import AllProducts from "./allProducts";
import Categories from "./categories";
import Slider from "./slider";

const Main = () => {
	return (
		<div className="container">
			<div className="main__hero">
				<Categories />
				<Slider />
			</div>
			<div className="row row-2">
				<h2>All Products</h2>
				<select>
					<option value="">Default Shorting</option>
					<option value="">Short by price</option>
					<option value="">Short by popularity</option>
					<option value="">Short by rating</option>
					<option value="">Short by sale</option>
				</select>
			</div>
			<AllProducts />

			<div className="page-btn">
				<span>1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
				<span>&#8594;</span>
			</div>
		</div>
	);
};

export default Main;
