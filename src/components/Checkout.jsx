import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { US_CURRENCY } from "../utils/constants";

export default function Checkout() {
  const products = useSelector((state) => state.cart.products);
  return (
    <CheckoutStyled>
      <div className="container">
        <div className="grid-container">
          <div className="product-side">
            <span>Checkout</span>
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
                          <button>Delete</button>
                        </div>
                        <div className="quantity-change">
                          <div className="minus">-</div>
                          <div className="quantity-value">
                            {product.quantity}
                          </div>
                          <div className="plus">+</div>
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
            <div className="subtotal">Subtotal (items): 0</div>
          </div>
          <div className="checkout-side"></div>
        </div>
      </div>
    </CheckoutStyled>
  );
}
const CheckoutStyled = styled.div`
  background: ${theme.colors.background};
  height: 100vh;

  .container {
    min-width: 1000px;
    max-width: 1500px;
    margin: 0 auto;
    padding-top: 10px;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 10px;
      background: white;

      .product-side {
        grid-column: 1 / span 6;
        padding: 10px;

        .product-grid {
          margin-top: 10px;
          margin-bottom: 20px;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));

          .product-grid-left {
            grid-column: 1 / span 10;
            display: grid;
            grid-template-columns: repeat(8, minmax(0, 1fr));

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
                margin: 10px 0;
              }

              .quantity-change {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                width: 20%;
                height: 25px;

                .minus {
                  background: grey;
                  border-radius: 3px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .quantity-value {
                  background: #c2c2c2;
                  border-radius: 3px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .plus {
                  background: grey;
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
        }
      }
      .checkout-side {
        grid-column: 7 / span 2;
      }
    }
  }
`;
