import React from "react";

const stopRendering = (prevProps, nextProps) => {
  return false;
};

function Header() {
  return (
    <div>
      <h1 className="f2">RoboFriends</h1>
    </div>
  );
}

export default React.memo(Header, stopRendering);
