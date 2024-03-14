import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { US_CURRENCY } from "../utils/constants";
import CheckoutProductSide from "./CheckoutProductSide";

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
          <CheckoutProductSide />
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
