import React from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assets/img/logo/gigopt.ru_logo.png";
import viber from "../../assets/img/viber.png";
import whatsapp from "../../assets/img/whatsapp.png";
import phone from "../../assets/img/phone.png";

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className="logo">
          <span href="#">
            <img src={logo} alt="logo" />
          </span>
        </Navbar.Brand>
        <div className="social_icon">
            <img src={viber} alt="viber" />
            <img src={whatsapp} alt="whatsapp" />
            <img src={phone} alt="phone" />
        </div>
        <div className="phoneNumber">
          НАШ НОМЕР<p>+7 900 642 53 07</p>
        </div>
        <Form inline>
          <FormControl type="text" placeholder="ПОИСК" className="search" />
          <button className="regbtn">РЕГИСТРАЦИЯ</button>
          <button className="loginBtn">ВОЙТИ</button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
