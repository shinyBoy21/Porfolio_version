import React from "react";
import "./Home.scss";
import Text from "../../components/textDetails/Text";
import BTN from "../../components/get started btn/BTN";

const Home = () => {
  return (
    <div className="home">
      <div className="text">
        <div className="text__welcome">
          <p className="text__welcome--display">Welcome!</p>
          <h1>
            My name is <span>Yves Mutshipayi</span>
          </h1>
        </div>
      </div>
      <div className="developer">
        <Text text="Javascript Developer" />
      </div>
      <div className="engineer">
        <Text text="Building Engineer" />
      </div>
      <div className='btn'><BTN/></div>
    </div>
  );
};

export default Home;
