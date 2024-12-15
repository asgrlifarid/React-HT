import React from "react";
import "./card.css"
const Card = (props) => {
    console.log(props);
    
  return (
    <div className="card">
      <img src={props.image} alt="Card image" />
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <span> {props.price}</span>
    </div>
  );
};

export default Card;
