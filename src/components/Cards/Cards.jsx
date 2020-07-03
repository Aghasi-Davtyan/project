import React from "react";
import "./Cards.css";

import Card from "./Card";

let links = [
  "Бытовые кондиционеры и увлажнители воздуха",
  "Другие системы и  аксессуары",
  "Чиллеры и Фанкойлы",
  "VRV и VRF Мульти-зональные кондиционеры",
  "Полупромышленные кондиционеры",
  "Мультисплит-системы",
];



function Cards() {
  return (
    <div className="container">
      <Card
        cardName="Кондиционирование"
        icon={require("../../assets/img/cardsIcon/ac.png")}
        links={links}
      />
      <Card
        cardName="Вентиляция"
        icon={require("../../assets/img/cardsIcon/ventilation.png")}
        links={links}
      />
      <Card
        cardName="Холодильное оборудование"
        icon={require("../../assets/img/cardsIcon/coldAc.png")}
        links={links}
      />
      <Card
        cardName="Обогреватели и камины"
        icon={require("../../assets/img/cardsIcon/fireplace.png")}
        links={links}
      />
      <Card
        cardName="Отопление и водоснабжение"
        icon={require("../../assets/img/cardsIcon/sun.png")}
        links={links}
      />
      <Card
        cardName="Расходные материалы и Инструменты"
        icon={require("../../assets/img/cardsIcon/wrench.png")}
        links={links}
      />
    </div>
  );
}

export default Cards;
