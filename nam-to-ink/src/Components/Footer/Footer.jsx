import React, { useEffect, useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="container">
      <p>&copy; {year} by 13inkTattoo</p>
      <p>Designed and Created by Alex Truong</p>
    </footer>
  );
};

export default Footer;
