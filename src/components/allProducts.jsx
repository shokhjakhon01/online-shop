import React, { useEffect, useState } from "react";
import AllProduct from "./allProduct";
import Loader from "./loader";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };
    fetchProducts();
    
  }, []);

  if(loading){
    return <Loader />
  }

  return (
    <div className="row">
      {products.map((product) => (
        <AllProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
