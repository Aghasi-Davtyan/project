import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

function Card({ cardName, icon, links }) {
  

  return (
    <div className="container">
      <div className="dropup">
        <button className="dropbtn">
          <img src={icon} />
          {cardName}
        </button>
        <div className="dropup-content">
          {links.map((link,index) => {
            return <a key={index} href="#">{link}</a>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Card;
