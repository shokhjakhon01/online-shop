import React, { useEffect, useState } from "react";
import AllProduct from "./allProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <AllProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
