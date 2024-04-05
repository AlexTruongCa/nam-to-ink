import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import photo_1 from "./assets/photo_1.png";
import photo_4 from "./assets/photo_4.png";
import photo_5 from "./assets/photo_5.png";
import photo_3 from "./assets/photo_3.png";

const dataMock = [
  {
    id: "17895695668004550",
    media_type: "IMAGE",
    media_url: photo_1,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004551",
    media_type: "IMAGE",
    media_url: photo_1,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004552",
    media_type: "IMAGE",
    media_url: photo_3,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004553",
    media_type: "IMAGE",
    media_url: photo_4,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
  {
    id: "17895695668004554",
    media_type: "IMAGE",
    media_url: photo_5,
    username: "jayposiris",
    timestamp: "2017-08-31T18:10:00+0000",
  },
];

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Routes>
        <Home />
        <About />
        <Title title="MY WORK" />
        <Portfolio>
          {dataMock.map((photoObject, index) => {
            let className;
            if (index === 3) {
              className = "photo-big-1";
            } else if (index === 4) {
              className = "photo-big-2";
            } else className = "photo";
            return (
              <Photo
                className={className}
                src={photoObject.media_url}
                key={photoObject.id}
              />
            );
          })}
          {/* <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photobig className="photo-big-1" src={photo_4} />
          <Photobig className="photo-big-2" src={photo_5} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} />
          <Photo className="photo" src={photo_1} /> */}
        </Portfolio>
        <Title title="CONTACT ME" titleBackground="#f8f0e8" />
        <Contact>
          <Info />
          <Form />
        </Contact>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
