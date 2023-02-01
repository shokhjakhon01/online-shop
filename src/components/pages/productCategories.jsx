import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCategories = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoryProduct = async () => {
      const res = await fetch(
        `https://dummyjson.com/products/category/${id}`
      );
      if (!res.ok) {
        throw new Error("Something went wrong with your api");
      }
      const data = await res.json();
      setProducts(data);
    };
    getCategoryProduct();
  }, [id]);

  return <div>{id}</div>;
};

export default ProductCategories;
