import React, { useState, useEffect } from "react";
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

// Fetch images from Instagram

const App = () => {
  const [instagramPhoto, setInstagramPhoto] = useState([]);
  useEffect(() => {
    console.log("one");
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/`, {
          method: "GET",
        });
        console.log("---response---", response);
        if (!response.ok) {
          throw new Error("Could not fetch resources");
        }
        const dataObj = await response.json();
        const dataArr = dataObj.data;

        //sort dataArr in descending order
        dataArr.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        //select most recent photos (12)
        const mostRecentPhoto = dataArr.slice(0, 12);

        const keyWord = "#testAPi";
        const filteredPhotos = [];
        for (let i = 0; i < mostRecentPhoto.length; i++) {
          const mediaType = mostRecentPhoto[i].media_type;
          const caption = mostRecentPhoto[i].caption;
          if (mediaType !== "VIDEO" && caption.indexOf(keyWord) === -1) {
            filteredPhotos.push(mostRecentPhoto[i]);
          }
        }
        console.log(instagramPhoto);
        setInstagramPhoto(filteredPhotos);
      } catch (error) {
        console.error("Could not fetch error", error);
      }
    };
    fetchData();
  }, []);

  const renderPhotos = () => {
    return instagramPhoto.map((dataArr, index) => {
      let className;
      if (index === 3) {
        className = "photo-big-1";
      } else if (index === 4) {
        className = "photo-big-2";
      } else className = "photo";
      return (
        <Photo className={className} src={dataArr.media_url} key={dataArr.id} />
      );
    });
  };

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Title title="MY WORK" />
      <Portfolio>{renderPhotos()}</Portfolio>
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
