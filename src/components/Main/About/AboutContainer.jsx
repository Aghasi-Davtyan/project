import React, { Component } from "react";
import About from "./About";
import "./About.css";

const text1 =
  "Перевозка и доставка. По суше,по морю и по воздуху,мы предлагаем любой вид перевозки, в странеи за рубежом.";
const text2 =
  "Главное —это качественная работа за короткое время.Оперативная и качественная работа гарантирована!";
const text3 =
  "Умение максимально использовать потенциал работников.Воодушевляет, заинтересо-вывает и направляет других на достижение целей";

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <h4 className="about">О НАС</h4>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <About
                pic={require("../../../assets/img/about/truck.png")}
                title={"ПЕРЕВОЗКА И ДОСТАВКА"}
                text={text1}
              />
            </div>
            <div className="col-md-4">
              <About
                pic={require("../../../assets/img/about/shield.png")}
                title={"КАЧЕСТВЕННАЯ РАБОТА ГАРАНТИРОВАНО"}
                text={text2}
              />
            </div>
            <div className="col-md-4">
              <About
                pic={require("../../../assets/img/about/brain.png")}
                title={"ПРОФЕССИОНАЛЬНЫЕ РАБОТНИКИ"}
                text={text3}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
