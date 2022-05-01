import React from "react";
import style from "./index.css";

const Fact = ({ fact }) => {
  return (
    <div className="fact">
      <h2>Did you know...</h2>
      <p className="fact-paragraph">{fact}</p>
    </div>
  );
};

export default Fact;
