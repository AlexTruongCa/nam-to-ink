import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Title from "./Components/Title/Title";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import Info from "./Components/Info/Info";
import Form from "./Components/Form/Form";
import Photo from "./Components/Photo/Photo";

// Fetch images from Instagram

const App = () => {
  const [instagramPhoto, setInstagramPhoto] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [selectedPhotoSrc, setSelectedPhotoSrc] = useState("");

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
      } catch (error) {
        console.error("Could not fetch error", error);
      }
    };

    fetchData();
  }, []);

  const renderPhotos = () => {
    return instagramPhoto.map((dataArr, index) => {
      const mediaURL = dataArr.media_url;
      let className;
      if (index === 3) {
        className = "photo-big-1";
      } else if (index === 4) {
        className = "photo-big-2";
      } else className = "photo";
      return (
        <Photo
          className={className}
          src={mediaURL}
          key={dataArr.id}
          openModal={() => {
            setIsModal(true);
            setSelectedPhotoSrc(mediaURL);
          }}
        />
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

      {/* <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button> */}

      {isModal && <Modal openModal={setIsModal} src={selectedPhotoSrc} />}

      <Footer />
    </div>
  );
};

export default App;
