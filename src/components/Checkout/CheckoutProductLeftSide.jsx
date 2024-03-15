import React from "react";
import {
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails";
import { styled } from "styled-components";

export default function CheckoutProductLeftSide({ product }) {
  const dispatch = useDispatch();
  return (
    <CheckoutProductLeftSideStyled className="product-grid-left">
      <div className="image-small">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt="" />
        </Link>
      </div>
      <div className="product-details">
        <ProductDetails product={product} />
        <div>
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            Delete
          </button>
        </div>
        <div className="quantity-change">
          <div
            className="minus"
            onClick={() => dispatch(decrementInCart(product.id))}
          >
            -
          </div>
          <div className="quantity-value">{product.quantity}</div>
          <div
            className="plus"
            onClick={() => dispatch(incrementInCart(product.id))}
          >
            +
          </div>
        </div>
      </div>
    </CheckoutProductLeftSideStyled>
  );
}

const CheckoutProductLeftSideStyled = styled.div`
  grid-column: 1 / span 10;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  margin-right: 10px;

  .image-small {
    grid-column: 1 / span 2;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
      @media screen and (max-width: 1100px) {
        width: 90%;
      }
    }
  }

  .product-details {
    grid-column: 3 / span 6;

    button {
      cursor: pointer;
      background: white;
      color: #086aa7;
      font-weight: bold;
      margin: 10px 0;
      border: none;
      border-radius: 3px;

      &:hover {
        text-decoration: underline;
      }
    }

    .quantity-change {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      width: 20%;
      height: 25px;

      .minus {
        cursor: pointer;
        background: #949494;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .quantity-value {
        background: #e1e1e1;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .plus {
        cursor: pointer;
        background: #949494;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
