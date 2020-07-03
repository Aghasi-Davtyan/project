import React from "react";
import "./About.css";

function About({ pic, title,text }) {
  return (
    <div className="card text-center ">
      <div className="overflow">
        <a href="#">
          <img src={pic} />
        </a>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text ">
          {text}
        </p>
      </div>
    </div>
  );
}

export default About;
