import React, { useEffect, useState } from "react";
import Category from "./category";
import classes from "./styles/categories.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data);
    };

    getAllCategories();
  }, []);

  return (
    <div className={classes.categories}>
      {categories.map((category, i) => (
        <Category key={i} category={category} />
      ))}
    </div>
  );
};

export default Categories;
