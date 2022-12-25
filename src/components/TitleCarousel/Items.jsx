import React from "react";
import './Items.css'

const Items = (props) => {
  return (
        <div className="carouselItem">
            <div> 
                <img src = {props.item.img} alt={props.item.name} height={60}/>
            </div>     
            <div>
                <div><h2>{props.item.name}</h2></div>
                <div><p>{props.item.description}</p>  </div>
            </div>     
        </div>
  );
};


            
export default Items;
