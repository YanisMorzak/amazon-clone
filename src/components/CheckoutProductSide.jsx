import React from "react";
import {
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../redux/cartSlice";
import { US_CURRENCY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function CheckoutProductSide() {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <CheckoutProductSideStyled className="product-side">
      <span className="title-checkout">Shopping Cart</span>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div className="product-grid">
              <div className="product-grid-left">
                <div className="image-small">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt="" />
                  </Link>
                </div>
                <div className="product-details">
                  <ProductDetails product={product} />
                  <div>
                    <button
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
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
              </div>
              <div className="product-grid-right">
                <div>{US_CURRENCY.format(product.price)}</div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="subtotal">
        Subtotal ({itemsNumber} items):{" "}
        <span className="sub-price">{US_CURRENCY.format(subtotal)}</span>
      </div>
    </CheckoutProductSideStyled>
  );
}

const CheckoutProductSideStyled = styled.div`
  grid-column: 1 / span 6;
  padding: 10px 15px;
  background: white;
  border-radius: 3px;

  .title-checkout {
    font-size: 21px;
    font-weight: bold;
  }

  .product-grid {
    margin-top: 10px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    .product-grid-left {
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
    }
    .product-grid-right {
      grid-column: 11 / span 2;
      padding-top: 10px;
      font-weight: bold;
    }
  }
  .subtotal {
    text-align: right;

    .sub-price {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
