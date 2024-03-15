import React from "react";
import { US_CURRENCY } from "../../utils/constants";
import { styled } from "styled-components";

export default function CheckoutProductRightSide({ product }) {
  return (
    <CheckoutProductRightSideStyled>
      <div>{US_CURRENCY.format(product.price)}</div>
    </CheckoutProductRightSideStyled>
  );
}
const CheckoutProductRightSideStyled = styled.div`
  grid-column: 11 / span 2;
  padding-top: 10px;
  font-weight: bold;
`;
