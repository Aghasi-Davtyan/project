import React from "react";
import "./Review.css";

function Review() {
  return (
    <div className='reviewPic'>
      <img
        src={require("../../assets/img/review/first.png")}
        className="first"
        alt="bgimg"
      />
      <img
        src={require("../../assets/img/review/second.png")}
        className="second"
        alt="bgimg"
      />
      <img
        src={require("../../assets/img/review/third.png")}
        className="third"
        alt="bgimg"
      />
    </div>
  );
}

export default Review;
