
import AllProducts from "./allProducts";
import Categories from "./categories";
import Pagination from "./Pagination";
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
    </div>
  );
};

export default Main;
