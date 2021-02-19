import React from "react";
import "./Scroll.css";

const Scroll = ({ children }) => {
  return (
    <div
      className="scroller"
      style={{
        overflowY: "scroll",
        height: "800px",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
