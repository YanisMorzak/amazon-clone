import React from "react";
import { styled } from "styled-components";
import { theme } from "../theme";
import { useSelector } from "react-redux";

export default function Checkout() {
  const products = useSelector((state) => state.cart.products);
  return (
    <CheckoutStyled>
      <div className="container">
        <div className="grid-container">
          <div className="product-side">
            <span>Checkout</span>
            {products.map((product) => {
              return <div key={product.id}>{product.title}</div>;
            })}
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
      }
      .checkout-side {
        grid-column: 7 / span 2;
      }
    }
  }
`;
