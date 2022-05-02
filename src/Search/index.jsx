import React, { useState, useEffect } from "react";
import style from "./index.css";

const Search = ({ setFact }) => {
  const [query, setQuery] = useState("");
  const [disabled, setDisabled] = useState(true);

  const getFact = async () => {
    try {
      const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const isValid = (val) => {
    if (val.length >= 3 && val.length <= 10) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (isValid(value)) setDisabled(false);
    else setDisabled(true);
    setQuery(value);
  };

  //Assumption: We don't want to show a different fact for the same search when > 1 result
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const fact = await getFact();
      if (fact?.result?.length) setFact(fact?.result[0]?.value);
      else {
        //Assumption that the lack of result is not from a 4xx or 5xx error (consider adding.)
        setFact(`No Results for "${query}." Please try again.`);
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <div className="search">
      <h3>Search for Facts</h3>
      <form>
        <input
          id="search-input"
          type="search"
          minLength="3"
          maxLength="10"
          placeholder="Search..."
          autocomplete="off"
          onChange={handleChange}
        />
        <button
          data-testid="search-button"
          className="search-button"
          disabled={disabled}
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
