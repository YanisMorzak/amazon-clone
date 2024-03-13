import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { styled } from "styled-components";

export default function ProductRatings({ avgRating, ratings }) {
  return (
    <ProductRatingsStyled>
      {Array.from({ length: avgRating }, (_, i) => (
        <div className="star-full">
          <StarIcon key={i} />
        </div>
      ))}
      {Array.from({ length: 5 - avgRating }, (_, i) => (
        <div className="star-empty">
          <OutlineStarIcon key={i} />
        </div>
      ))}
      <span className="rating">{ratings} ratings</span>
    </ProductRatingsStyled>
  );
}
const ProductRatingsStyled = styled.div`
  display: flex;
  align-items: center;
  .star-full {
    color: orange;
    width: 20px;
  }
  .star-empty {
    color: orange;
    width: 20px;
  }
  .rating {
    color: #086aa7;
    margin-left: 15px;
    /* margin-top: 10px; */
  }
`;
