import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Main/Carousel/Carousel";
import Cards from "./components/Cards/Cards";
import AboutContainer from "./components/Main/About/AboutContainer";
import Review from './components/Review/Review'

function App() {
  return (
    <div className='App'>
      <Header />
      <Carousel />
      <Cards />
      <AboutContainer />
      <Review />
      <Footer />
    </div>
  )
}

export default App;
