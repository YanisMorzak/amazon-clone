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
    return (
      <ProductBadgeStyled>
        <span className="best">#1 Best Seller</span>
      </ProductBadgeStyled>
    );
  } else if (badge === "limited") {
    return (
      <ProductBadgeStyled>
        <span className="limited">Limited Time Deal</span>
      </ProductBadgeStyled>
    );
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

  .best {
    background: #e67a00;
    color: white;
    padding: 4px;
    border-radius: 2px;
  }
  .limited {
    background: #cc0c39;
    color: white;
    padding: 4px;
    border-radius: 3px;
  }
`;
