import React, { useState, useEffect } from "react";
import Fact from "../Fact";
import Search from "../Search";
import style from "./index.css";

const Content = () => {
  const [fact, setFact] = useState("");

  useEffect(() => {
    const getFact = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      return data;
    };
    getFact().then(
      (data) => setFact(data.value)
    );
  }, []);

  return (
    <div className="content">
      <Fact fact={fact} />
      <Search setFact={setFact} />
    </div>
  );
};

export default Content;
