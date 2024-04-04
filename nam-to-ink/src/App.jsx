import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import Info from "./Components/Info/Info";
import Form from "./Components/Form/Form";
import Photo from "./Components/Photo/Photo";
import Photobig from "./Components/Photobig/Photobig";
import photo_1 from "../../assets/photo_1.png";
import photo_4 from "../../assets/photo_4.png";
import photo_5 from "../../assets/photo_5.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Title title="MY WORK" />
      <Portfolio>
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photobig className="photo-big-1" src={photo_4} />
        <Photobig className="photo-big-2" src={photo_5} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
        <Photo src={photo_1} />
      </Portfolio>
      <Title title="CONTACT ME" titleBackground="#f8f0e8" />
      <Contact>
        <Info />
        <Form />
      </Contact>
      <Footer />
    </div>
  );
};

export default App;
