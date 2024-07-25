//import React from 'react';
//import './App.css';
//
//import Navbar from "./components/Navbar/Navbar";
//import Hero from "./components/Hero/Hero";
//import JoinUs from "./components/JoinUs/JoinUs";
//import Features from "./components/Features/Features";
//import Sale from "./components/Sale/Sale";
//import Pricing from "./components/Pricing/Pricing";
//import Bmi from "./components/Bmi/Bmi";
//import { Link, Element, animateScroll as scroll } from 'react-scroll';
//import Trainers from "./components/Trainers/Trainers";
//import Summer from "./components/Summer/Summer";
//import Footer from "./components/Footer/Footer";
//
//const App = () => {
//  return (
//    <div className="App">
//      <Navbar />
//      <Hero />
//      <JoinUs />
//      <Features />
//      <Sale />
//      <Pricing />
//
//      <Bmi />
//      <Trainers />
//      <Summer />
//      <Footer />
//    </div >
//  );
//}
//
//export default App;

import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JoinUs from "./components/JoinUs/JoinUs";
import Features from "./components/Features/Features";
import Sale from "./components/Sale/Sale";
import Pricing from "./components/Pricing/Pricing";
import Bmi from "./components/Bmi/Bmi";
import Trainers from "./components/Trainers/Trainers";
import Summer from "./components/Summer/Summer";
import Footer from "./components/Footer/Footer";
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Element name="hero"><Hero /></Element>
      <Element name="joinus"><JoinUs /></Element>
      <Element name="features"><Features /></Element>
      <Element name="sale"><Sale /></Element>
      <Element name="pricing"><Pricing /></Element>
      <Element name="bmi"><Bmi /></Element>
      <Element name="trainers"><Trainers /></Element>
      <Element name="summer"><Summer /></Element>
      <Element name="footer"><Footer /></Element>

    </div>
  );
}

export default App;
