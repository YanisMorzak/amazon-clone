import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { callApi } from "../utils/CallApi";
import { styled } from "styled-components";
import { theme } from "../theme";
import ProductDetails from "./ProductDetails";
import ProductPurchaseInfos from "./ProductPurchaseInfos";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setproduct] = useState(null);

  const getProduct = () => {
    callApi(`data/products.json`).then((productResults) => {
      setproduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product?.title) return <h1>Loading Product...</h1>;

  return (
    product && (
      <ProductPageStyled>
        <div className="container">
          <div className="grid-container">
            <div className="left">
              <img src={`${product.image}`} />
            </div>
            <div className="middle">
              <ProductDetails product={product} />
              <div className="description">{product.description}</div>
            </div>
            <div className="right">
              <ProductPurchaseInfos product={product} />
            </div>
          </div>
        </div>
      </ProductPageStyled>
    )
  );
}

const ProductPageStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.background};

  .container {
    min-width: 1000px;
    max-width: 1500px;
    margin: 0 auto;
    padding: 10px;

    .grid-container {
      display: grid;
      grid-template-columns: repeat(
        10,
        minmax(0, 1fr)
      ); /* Crée une grille avec 10 colonnes de largeur égale */
      gap: 0.5rem;

      .left {
        grid-column: 1 / span 3;
        background: white;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 60%;
          border: 1px solid ${theme.colors.background};
          padding: 17px;

          @media screen and (min-width: 1220px) {
            width: 55%;
          }
        }
      }
      .middle {
        grid-column: 4 / span 5;
        background: white;
        border-radius: 4px;
        padding: 15px;
        .description {
          margin-top: 10px;
        }
      }
      .right {
        grid-column: 9 / span 2;
        background: white;
        border-radius: 4px;
        padding: 15px;
      }
    }
  }
`;
