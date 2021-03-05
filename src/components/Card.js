import React from "react";
// import './Card.css'

const Card = ({ id, name, email, username }) => {
  return (
    <div className="tc bg-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robo profile" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
