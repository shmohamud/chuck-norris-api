import React from "react";
import style from "./index.css";

const Fact = ({ fact }) => {
  return (
    <div className="fact">
      <h3>Did you know...</h3>
      <p className="fact-paragraph">{fact}</p>
    </div>
  );
};

export default Fact;
