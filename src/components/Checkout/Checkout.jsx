import React from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";
import CheckoutProductSide from "./CheckoutProductSide";
import CheckoutSummarySide from "./CheckoutSummarySide";

export default function Checkout() {
  return (
    <CheckoutStyled>
      <div className="container">
        <div className="grid-container">
          <CheckoutProductSide />
          <CheckoutSummarySide />
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
    }
  }
`;
