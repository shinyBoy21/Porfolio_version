import React from "react";
import './Text.scss'

const Text = ({ text }) => {
    
  return (
      <>
      { text==='Javascript Developer'?
      <div className="dev">
        <h2>{text}</h2>
      </div> 
      :
      <div className="eng">
        <h2>{text}</h2>
      </div>
      }
    </>
    
  );
};

export default Text;
