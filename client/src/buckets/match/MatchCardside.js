import React, { useState } from "react";
import "./match.css";
import axios from "axios";
import dayjs from "dayjs";

import { useNavigate } from "react-router";

const MatchCardside = ({ match, homeTeamfirst, awayTeamfirst, winning }) => {
  return (
    <div className="matchcard matchcard-side">
      <div className="matchcard-h1">
        <h1>
          {" "}
          {match[1] && match[1].date
            ? dayjs(
                match.filter((m) => m.done)[
                  match.filter((m) => m.done).length - 1
                ]?.date
              ).format("DD MMM YYYY")
            : "no"}{" "}
        </h1>
      </div>
      <div className="matchcard-side-info">
        <div className="matchcard-side-logo flex-col text-slate-950">
          <img
            src={
              homeTeamfirst
                ? `api/v1/teams/teams-photo/${homeTeamfirst._id}`
                : null
            }
            alt={homeTeamfirst ? homeTeamfirst.teamname : "Unknown Team"}
          />
          <div className="text-center font-bold">
            {homeTeamfirst ? homeTeamfirst.teamname : "no"}
          </div>
        </div>
        <div className="matchcard-side-data flex-col ">
          <div className="matchcard-side-data-score text-[25px]">
            {
              match.filter((m) => m.done)[
                match.filter((m) => m.done).length - 1
              ]?.homescore
            }
            -
            {
              match.filter((m) => m.done)[
                match.filter((m) => m.done).length - 1
              ]?.awayscore
            }
          </div>
          <div className="text-sm ">Full Time</div>
        </div>
        <div className="matchcard-side-logo flex-col text-slate-950">
          <img
            src={
              awayTeamfirst
                ? `api/v1/teams/teams-photo/${awayTeamfirst._id}`
                : null
            }
            alt={awayTeamfirst ? awayTeamfirst.teamname : "Unknown Team"}
          />
          <div className="text-center font-bold">
            {awayTeamfirst ? awayTeamfirst.teamname : "no"}
          </div>
        </div>
      </div>
      <div className="matchcard-winning ">
        <h1>{winning}</h1>
      </div>
    </div>
  );
};

export default MatchCardside;
