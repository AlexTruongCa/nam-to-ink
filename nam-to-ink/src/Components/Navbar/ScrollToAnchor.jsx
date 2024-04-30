import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

//Put this component anywhere within the app router component.

function ScrollToAnchor({ offset = 0 }) {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current) {
      const element = document.getElementById(lastHash.current);
      if (element) {
        // this step check if element exists before accessing its properties
        setTimeout(() => {
          const yOffset = offset; // Offset value
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          lastHash.current = "";
        }, 100);
        //getBoundingClientRect() method returns the size of an element and its position relative to the viewport. https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        //scrollY property returns the pixels a document has scrolled from the upper left corner of the window. https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
      }
    }
  }, [location, offset]);

  return null;
}

export default ScrollToAnchor;
