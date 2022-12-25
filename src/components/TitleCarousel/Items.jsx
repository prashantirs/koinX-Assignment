import React from "react";
import './Items.css'

const Items = (props) => {
  return (
        <div className="carouselItem">
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>       
        </div>
  );
};

export default Items;
