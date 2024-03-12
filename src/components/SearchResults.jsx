import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callApi } from "../utils/CallApi";
import { styled } from "styled-components";
import { theme } from "../theme";
import ProductDetails from "./ProductDetails";
import { US_CURRENCY } from "../utils/constants";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callApi(`data/search.json`).then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
        console.log("products: ", products);
      } else {
        setProducts(categoryResults);
        console.log("products: ", products);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <SearchResultsStyled>
      {products &&
        products.map((product, key) => {
          return (
            <div className="grid-container">
              <div className="left">
                <Link key={key} to={`/product/${product.id}`}>
                  <img src={product.image_small} alt="" />
                </Link>
              </div>
              <div className="middle">
                <div className="details">
                  <ProductDetails product={product} />
                  <div className="price">
                    {US_CURRENCY.format(product.price)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </SearchResultsStyled>
  );
}

const SearchResultsStyled = styled.div`
  min-width: 1000px;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 10px;

  .grid-container {
    height: 250px;
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    .left {
      grid-column: 1 / span 2;
      background: ${theme.colors.background};
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
      }
    }
    .middle {
      grid-column: 3 / span 9;
      background: #f7f8f8;
      padding: 10px;
      border-radius: 3px;

      .details {
        color: black;
        text-decoration: none;

        .price {
          font-size: 21px;
          font-weight: bold;
        }
      }
    }
  }
`;
