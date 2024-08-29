import "./part.css";

import React from "react";
import partbanner from "../../img/banner/part.png";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Part = () => {
  return (
    <div className="part-wrapper">
      <div className="part-container">
        {/* <img src={partbanner} alt="partbanner" /> */}
        <LazyLoadImage
          alt="partbanner"
          width="100%"
          height="100%"
          effect="blur"
          src={partbanner}
          placeholderSrc={partbanner}
        />
      </div>
    </div>
  );
};

export default Part;
