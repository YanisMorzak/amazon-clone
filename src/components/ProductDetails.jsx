import React from "react";

export default function ProductDetails({ product, ratings }) {
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.brand}</div>
      <div>{product.avgRating}</div>
      <div>{product.attribute}</div>
      <div>{product.badge}</div>
    </div>
  );
}
