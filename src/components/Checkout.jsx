import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { US_CURRENCY } from "../utils/constants";

export default function Checkout() {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );

  return (
    <CheckoutStyled>
      <div className="container">
        <div className="grid-container">
          <div className="product-side">
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
            <div className="subtotal">
              Subtotal ({itemsNumber} items):{" "}
              <span className="sub-price">{US_CURRENCY.format(subtotal)}</span>
            </div>
          </div>
          <div className="checkout-side">
            <div className="delivery-checkout">
              Your order qualifies for{" "}
              <span className="delivery-bold">FREE DELIVERY.</span> Delivery
              Details
            </div>
            <div>
              Subtotal ({itemsNumber} items):{" "}
              <span className="sub-price-checkout">
                {US_CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="btn-checkout">Proceed to Checkout</button>
          </div>
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
    padding: 10px 0;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 10px;

      .product-side {
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
      }
      .checkout-side {
        grid-column: 7 / span 2;
        height: 250px;
        background: white;
        padding: 20px 15px;
        border-radius: 3px;

        .delivery-checkout {
          color: green;
          margin-bottom: 15px;
          .delivery-bold {
            font-weight: bold;
          }
        }

        .sub-price-checkout {
          font-size: 20px;
          font-weight: bold;
        }

        .btn-checkout {
          cursor: pointer;
          background: #ffd814;
          border: none;
          border-radius: 3px;
          margin-top: 20px;
          padding: 10px;
          width: 80%;
          &:hover {
            background: #eeca13;
          }
        }
      }
    }
  }
`;
