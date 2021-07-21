import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <div className="text">
        <div className="text__welcome">
          <p className="text__welcome--display">Welcome!</p>
          <h1>
            My name is <span>Yves Mutshipayi</span>
          </h1>
        </div>
      </div>
      <div>
        <div className="engineer"></div>
        <div className="developer"></div>
      </div>
    </>
  );
};

export default Home;
