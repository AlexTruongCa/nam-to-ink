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
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,media_type,caption,media_url,permalink)`,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer IGQWRQV01nMUJLaG82ZAkR3TGJwWUpJMUVsc043ZAkVuTVU0QTlDazVrSXFIT1BtLUtHQXNsOGc1bnhvRFVmRFRNNVlIT3RLb1ZAacUNwdkNXT0NfbjBOTXZA3WTZAMN244SVNnLVdCdzFRaXBVVUFhaldaRnQ3RW1LT0UZD",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Could not fetch resources");
        }
        const dataObj = await response.json();
        const dataArr = dataObj.data;
        const keyWord = "#testAPi";
        const filteredPhotos = [];
        for (let i = 0; i < dataArr.length; i++) {
          const mediaType = dataArr[i].media_type;
          const caption = dataArr[i].caption;
          if (mediaType !== "VIDEO" && caption.indexOf(keyWord) !== -1) {
            filteredPhotos.push(dataArr[i]);
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
