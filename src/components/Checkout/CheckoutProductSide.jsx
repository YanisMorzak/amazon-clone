import React from "react";
import { US_CURRENCY } from "../../utils/constants";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CheckoutProductLeftSide from "./CheckoutProductLeftSide";
import CheckoutProductRightSide from "./CheckoutProductRightSide";

export default function CheckoutProductSide() {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    )
  );

  return (
    <CheckoutProductSideStyled className="product-side">
      <span className="title-checkout">Shopping Cart</span>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <div className="product-grid">
              <CheckoutProductLeftSide product={product} />
              <CheckoutProductRightSide product={product} />
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
  }
  .subtotal {
    text-align: right;

    .sub-price {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
