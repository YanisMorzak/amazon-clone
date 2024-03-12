import React from "react";
import { styled } from "styled-components";
import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";
import { Link } from "react-router-dom";

export default function ProductDetails({ product }) {
  return (
    <ProductDetailsStyled>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <div className="title">{product.title}</div>
      </Link>
      <div className="brand">
        by <span className="brand-name">{product.brand}</span>
      </div>
      <div className="rating">
        <ProductRatings
          avgRating={product.avgRating}
          ratings={product.ratings}
        />
      </div>
      <div className="attribute">{product.attribute}</div>
      <div>
        <ProductBadge badge={product.badge} />
      </div>
    </ProductDetailsStyled>
  );
}

const ProductDetailsStyled = styled.div`
  border-bottom: 1px solid #bbbfbf;
  padding-bottom: 10px;
  .title {
    font-size: 21px;
    font-weight: bold;
    margin-bottom: 2px;
    color: black;
    &:hover {
      color: #e67a00;
    }
  }
  .brand {
    font-size: 16px;
    margin-bottom: 2px;
    .brand-name {
      color: #086aa7;
    }
  }
  .rating {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .attribute {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;
