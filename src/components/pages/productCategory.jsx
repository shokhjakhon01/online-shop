import React from 'react'

const ProductCategory = ({product}) => {
  console.log(product);
  return (
    <div class="col-4">
    <img
      style={{ width: "292px", height: "292px" }}
      src={product.thumbnail}
      alt=""
    />
    <h4>{product.title}</h4>
    <div class="rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
    </div>
    <p>${product.price}</p>
  </div>
  )
}

export default ProductCategory
