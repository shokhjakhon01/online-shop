import React from "react";
import { Link } from "react-router-dom";
import classes from '../styles/category.module.css'

const Category = ({ category }) => {
  return (
    <div className={classes.category}>
      <Link className={classes.title} to={`/category/${category}`}> {category}</Link>
    </div>
  );
};

export default Category;
