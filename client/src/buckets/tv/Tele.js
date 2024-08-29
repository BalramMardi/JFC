import "./tv.css";

import React from "react";
import tele1 from "../../video/tele1.mp4";
import { useNavigate } from "react-router";

const Tele = () => {
  const navigate = useNavigate();
  return (
    <div
      className="tv-wrapper cursor-pointer"
      onClick={() => navigate("/videos")}
    >
      <div className="tv-title">JFC TV</div>
      <div className="tv-container">
        <video src={tele1} autoPlay muted loop></video>
      </div>
      <div class="shadow"></div>
    </div>
  );
};

export default Tele;
