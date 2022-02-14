import React, { useState } from "react";
import "../styles/Hero.scss";
import Data from "../data/Data";
const Hero = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { text } = Data;
  return (
    <>
      <div className="container">
        <h1>
          Greetings! My name is <span>Heinsernberg.</span>
        </h1>
        <h3>I built dynamic responsive websites.</h3>
        <p>
          {seeMore ? text : `${text.subString(0, 100)}`}
          <button className="btn" onClick={() => setSeeMore(!seeMore)}>
            {seeMore ? "See Less" : "See More"}
          </button>
        </p>
      </div>
    </>
  );
};

export default Hero;
