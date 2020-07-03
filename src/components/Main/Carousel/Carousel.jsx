import React, { Component } from "react";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Carousel extends Component {
  state = {
    images: [
      {
        name: "1",
        ulr: require("../../../assets/Slider/1.png"),
      },
      {
        name: "2",
        ulr: require("../../../assets/Slider/2.png"),
      },
      {
        name: "3",
        ulr: require("../../../assets/Slider/3.png"),
      },
      {
        name: "4",
        ulr: require("../../../assets/Slider/4.png"),
      },
      {
        name: "5",
        ulr: require("../../../assets/Slider/5.png"),
      },
    ],
  };

  render() {
    let settings = {
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
        verticalSwiping: true,
    };

    return (
      <Slider {...settings}>
        {this.state.images.map((img, index) => {
          return (
            <div className="wdt" key={index}>
              <img className="img" src={img.ulr} alt={img.name} />
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default Carousel;
