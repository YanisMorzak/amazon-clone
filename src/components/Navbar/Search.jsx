import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { theme } from "../../theme";
import { callApi } from "../../utils/CallApi";
import { useNavigate } from "react-router";
import { createSearchParams } from "react-router-dom";

export default function Search() {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callApi(`data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <SearchStyled>
      <div className="container">
        <select
          className="select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Items</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onHandleSubmit(e);
            }
          }}
        />
        <div className="button-container">
          <button className="button" onClick={onHandleSubmit}>
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
      {suggestions && (
        <div className="suggestion">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
                className="suggest-title"
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </SearchStyled>
  );
}

const SearchStyled = styled.div`
  position: relative;
  width: 100%;
  height: 65%;

  .container {
    height: 100%;
    background: ${theme.colors.yellow};
    border-radius: 4px;
    display: flex;
    justify-content: left;
    align-items: center;

    .select {
      height: 100%;
      width: 20%;
      background: rgb(230, 230, 230);
      border: 1px solid rgb(205, 205, 205);
      border-radius: 4px;
      padding-left: 8px;
    }

    .input {
      position: relative;
      height: 100%;
      flex: 1;
      border: none;
      padding-left: 5px;
    }

    .button-container {
      cursor: pointer;
      width: 48px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .button {
        cursor: pointer;
        background: transparent;
        border: none;
        color: rgb(51, 51, 51);
        height: 27px;
        width: 27px;
      }
    }
  }
  .suggestion {
    background-color: white;
    color: black;
    width: 100%;
    z-index: 40;
    position: absolute;
    box-sizing: border-box;

    .suggest-title {
      padding: 5px;
    }
  }
`;
