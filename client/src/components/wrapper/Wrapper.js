import React from "react";
import Threetile from "../../pages/Threetile/Threetile";
import "./wrapper.css";
import Strips from "../../pages/strips/Strips";

import Info from "../../buckets/info/Info";
// import Tele from "../../buckets/tv/Tele";
// import Miner from "../../buckets/miners/Miner";
// import Part from "../../buckets/part/Part";
// import Players from "../../buckets/players/Players";
// import Banner from "../../buckets/banner/Banner";
// import Trophy from "../../buckets/trophy/Trophy";
import Layout from "../../layout/Layout";

const Miner = React.lazy(() => import("../../buckets/miners/Miner"));
const Tele = React.lazy(() => import("../../buckets/tv/Tele"));
const Part = React.lazy(() => import("../../buckets/part/Part"));
const Players = React.lazy(() => import("../../buckets/players/Players"));
const Trophy = React.lazy(() => import("../../buckets/trophy/Trophy"));
const Banner = React.lazy(() => import("../../buckets/banner/Banner"));

const Wrapper = () => {
  return (
    <div>
      <Threetile />
      <Strips />
      <Info />

      <React.Suspense fallback="loading...">
        <Tele />
        <Miner />
        <Part />
        <Players />
        <Trophy />
        <Banner />
      </React.Suspense>
    </div>
  );
};

export default Wrapper;
