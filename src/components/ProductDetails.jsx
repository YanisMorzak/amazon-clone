import React from "react";
import { styled } from "styled-components";
import ProductBadge from "./ProductBadge";

export default function ProductDetails({ product, ratings }) {
  return (
    <ProductDetailsStyled>
      <div className="title">{product.title}</div>
      <div className="brand">{product.brand}</div>
      <div className="rating">Rating: {product.avgRating}</div>
      <div className="attribute">{product.attribute}</div>
      <div>
        <ProductBadge badge={product.badge} />
      </div>
    </ProductDetailsStyled>
  );
}

const ProductDetailsStyled = styled.div`
  .title {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 2px;
  }
  .brand {
    font-size: 16px;
    margin-bottom: 2px;
  }
  .rating {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .attribute {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 2px;
  }
`;
