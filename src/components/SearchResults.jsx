import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callApi } from "../utils/CallApi";
import { styled } from "styled-components";

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
            <Link key={key} to={`/product/${product.id}`}>
              <div className="title">{product.title}</div>;
            </Link>
          );
        })}
    </SearchResultsStyled>
  );
}

const SearchResultsStyled = styled.div`
  min-width: 1000px;
  max-width: 1300px;
  .title {
    height: 250px;
  }
`;
