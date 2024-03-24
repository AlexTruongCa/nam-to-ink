import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Title title="MY WORK" />
      <Portfolio />
      <Title title="CONTACT ME" />
      <Contact />
    </div>
  );
};

export default App;
