import React from "react";

export const Color = ({ color, name, code }) => {
  return (
   
      <div className="color-container" key={code}>
        <div className="color" style={{ backgroundColor: color }}></div>
        <div className="text">
          <h2 className="code">{code}</h2>
          <p className="name" style={{ color: color }}>
            {name}
          </p>
        </div>
      </div>
  
  );
};
