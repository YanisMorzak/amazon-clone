import React from "react";
import { styled } from "styled-components";

export default function ProductBadge({ badge }) {
  if (badge === "choice") {
    return (
      <ProductBadgeStyled>
        <span className="amazon-choice">
          Amazon's <span className="choice">Choice</span>
        </span>
      </ProductBadgeStyled>
    );
  } else if (badge === "seller") {
    return <ProductBadgeStyled>#1 Best Seller</ProductBadgeStyled>;
  } else if (badge === "limited") {
    return <ProductBadgeStyled>Limited Time Deal</ProductBadgeStyled>;
  }
  return <div></div>;
}

const ProductBadgeStyled = styled.div`
  margin-top: 8px;

  .amazon-choice {
    border-radius: 2px;
    background: #252525;
    color: white;
    padding: 3px;
    .choice {
      color: orange;
    }
  }
`;
