import React, { useState } from "react";
import { US_CURRENCY } from "../utils/constants";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductPurchaseInfos({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("1");
  return (
    <ProductPurchaseInfosStyled>
      <div className="price">{US_CURRENCY.format(product.price)}</div>
      <div className="old-price">
        RRP: {US_CURRENCY.format(product.oldPrice)}
      </div>
      <div className="returns">FREE Returns</div>
      <div className="delivery">FREE Delivery</div>
      <div className="stock">In Stock</div>
      <div className="quantity">
        Quantity:
        <select
          onChange={(e) => setQuantity(e.target.value)}
          className="select"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <button onClick={() => dispatch(addToCart())} className="button-cart">
        Add to Cart
      </button>
    </ProductPurchaseInfosStyled>
  );
}
const ProductPurchaseInfosStyled = styled.div`
  .price {
    font-size: 21px;
    font-weight: bold;
    color: #b32e0c;
    text-align: right;
  }
  .old-price {
    color: gray;
    text-align: right;
  }
  .returns {
    font-weight: bold;
    margin-top: 12px;
    color: #086aa7;
  }
  .delivery {
    font-weight: bold;
    margin-top: 5px;
    color: #086aa7;
  }
  .stock {
    font-weight: bold;
    color: #288b28;
    margin-top: 5px;
  }
  .quantity {
    margin-top: 5px;
    margin-bottom: 10px;
    .select {
      margin-left: 5px;
    }
  }
  .button-cart {
    cursor: pointer;
    background: #ffd814;
    border: none;
    border-radius: 3px;
    padding: 10px;
    width: 80%;
    &:hover {
      background: #eeca13;
    }
  }
`;
