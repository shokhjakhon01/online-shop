import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import classes from "../styles/productCategories.module.css";
import ProductCategory from "./productCategory";

const ProductCategories = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const getCategoryProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${id}`);
      if (!res.ok) {
        throw new Error("Something went wrong with your api");
      }
      const data = await res.json();
      setProducts(data.products);
      setLoading(false)
    };
    getCategoryProduct();
  }, [id]);

  if(loading){
    return <Loader />
  }

  return (
    <div className="container">
      <h3 className={classes.title}>{id}</h3>
      <div className="row">
        {products.map((product, i) => (
          <ProductCategory key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
