import React from "react";
import CounterButton from "./CounterButton";

const stopRendering = (prevProps, nextProps) => {
  return false;
};

function Header() {
  console.log("Header");

  return (
    <div>
      <h1 className="f2">RoboFriends</h1>
    </div>
  );
}

export default React.memo(Header, stopRendering);
