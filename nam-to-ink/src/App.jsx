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
import ImageSlider from "./Components/ImageSlider/ImageSlider";

// Fetch images from Instagram

const App = () => {
  const [instagramPhoto, setInstagramPhoto] = useState([]);

  useEffect(() => {
    // console.log("one");
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
        const dataSort = dataArr.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });

        const keyWord = "#testAPi";
        const filteredPhotos = [];

        for (let i = 0; i < dataSort.length; i++) {
          const mediaType = dataSort[i].media_type;
          const caption = dataSort[i].caption;
          if (mediaType !== "VIDEO" && caption.indexOf(keyWord) === -1) {
            filteredPhotos.push(dataSort[i]);
          }
        }

        //pick the 12 most recent photos
        const dataSlice = filteredPhotos.slice(0, 12);
        setInstagramPhoto(dataSlice);
        // console.log(dataSlice);
      } catch (error) {
        console.error("Could not fetch error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Title title="MY WORK" />
      <Portfolio galleryImages={instagramPhoto}></Portfolio>
      <Title title="CONTACT ME" titleBackground="#f8f0e8" />
      <Contact>
        <Info />
        <Form />
      </Contact>
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          height: "100%",
          margin: "0 auto",
        }}
      >
        <ImageSlider imageUrls={instagramPhoto} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
