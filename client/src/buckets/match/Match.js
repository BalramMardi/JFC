import "./match.css";

import React, { useEffect, useState } from "react";

import axios from "axios";
import dayjs from "dayjs";

import { useNavigate } from "react-router";
import MatchCardside from "./MatchCardside";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Match = () => {
  const [match, setMatch] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);

  const homeTeamMiddle = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[0]?.home
  );
  const awayTeamMiddle = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[0]?.away
  );

  const homeTeamfirst = teamData.find(
    (team) =>
      team._id ===
      match.filter((m) => m.done)[match.filter((m) => m.done).length - 1]?.home
  );
  const awayTeamfirst = teamData.find(
    (team) =>
      team._id ===
      match.filter((m) => m.done)[match.filter((m) => m.done).length - 1]?.away
  );

  const homeTeamthird = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[1]?.home
  );
  const awayTeamthird = teamData.find(
    (team) => team._id === match.filter((m) => !m.done)[1]?.away
  );

  const homefirstScore = match.filter((m) => m.done)[
    match.filter((m) => m.done).length - 1
  ]?.homescore;
  const awayfirstScore = match.filter((m) => m.done)[
    match.filter((m) => m.done).length - 1
  ]?.awayscore;

  let winning = "home";
  if (homefirstScore > awayfirstScore) {
    winning = homeTeamfirst ? homeTeamfirst.teamname + " WON" : "null";
  } else if (homefirstScore < awayfirstScore) {
    winning = awayTeamfirst ? awayTeamfirst.teamname + " WON" : "null";
  } else {
    winning = "Match was Draw";
  }

  const navigate = useNavigate();

  const getAllMatch = async () => {
    try {
      const { data } = await axios.get("api/v1/match/get-match");
      setMatch(data.match);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTeam = async () => {
    try {
      const { data } = await axios.get("api/v1/teams/get-teams");
      setTeamData(data.teams);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllLeague = async () => {
    try {
      const { data } = await axios.get("api/v1/league/get-league");
      setLeagueData(data.league);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMatch();
    getAllTeam();
    getAllLeague();
  }, []);

  return (
    <div className="matchinfo-container">
      <MatchCardside
        match={match}
        homeTeamfirst={homeTeamfirst}
        awayTeamfirst={awayTeamfirst}
        winning={winning}
      />
      {/* card 2 */}

      <div className="matchcard matchcard-middle">
        <div className="matchcard-h1">
          <h1>
            {match[0] && match[0].date
              ? dayjs(match.filter((m) => !m.done)[0]?.date).format(
                  "DD MMM YYYY"
                )
              : ""}{" "}
          </h1>
        </div>
        <div className="matchcard-middle-info">
          <div className="matchcard-middle-logo">
            {/* <img
              src={
                homeTeamMiddle
                  ? `api/v1/teams/teams-photo/${homeTeamMiddle._id}`
                  : null
              }
              alt={homeTeamMiddle ? homeTeamMiddle.teamname : "Unknown Team"}
            /> */}

            <LazyLoadImage
              alt={homeTeamMiddle ? homeTeamMiddle.teamname : "Unknown Team"}
              width="200px"
              height="100%"
              effect="blur"
              src={
                homeTeamMiddle
                  ? `api/v1/teams/teams-photo/${homeTeamMiddle._id}`
                  : null
              }
              placeholderSrc={
                homeTeamMiddle
                  ? `api/v1/teams/teams-photo/${homeTeamMiddle._id}`
                  : null
              }
            />
          </div>
          <div className="matchcard-middle-data">
            <div className="matchcard-rightside-time w-[100%] h-[20%] text-[30px] text-slate-900 text-center font-bold">
              {match[0] && match[0].slug
                ? match.filter((m) => !m.done)[0]?.slug.split("-")[0]
                : ""}{" "}
            </div>

            <div className="matchcard-middle-title">
              {match[0] && match[0].date
                ? match.filter((m) => !m.done)[0]?.time
                : ""}{" "}
            </div>
            <div className="matchcard-middle-data-details">
              <div className="matchcard-middle-data-match">
                <div className="matchcard-middle-data-match-home">
                  {homeTeamMiddle ? homeTeamMiddle.teamname : ""}
                </div>
                <div className="matchcard-middle-data-match-v"> V </div>
                <div className="matchcard-middle-data-match-away">
                  {" "}
                  {awayTeamMiddle ? awayTeamMiddle.teamname : ""}
                </div>
              </div>
              <div className="matchcard-middle-data-stadium">
                {match[0] && match[0].date
                  ? match.filter((m) => !m.done)[0]?.stadium
                  : ""}{" "}
              </div>
            </div>
          </div>
          <div className="matchcard-middle-logo">
            {/* <img
              src={
                awayTeamMiddle
                  ? `api/v1/teams/teams-photo/${awayTeamMiddle._id}`
                  : null
              }
              alt={awayTeamMiddle ? awayTeamMiddle.teamname : "Unknown Team"}
            /> */}
            <LazyLoadImage
              alt={awayTeamMiddle ? awayTeamMiddle.teamname : "Unknown Team"}
              width="200px"
              height="100%"
              effect="blur"
              src={
                awayTeamMiddle
                  ? `api/v1/teams/teams-photo/${awayTeamMiddle._id}`
                  : null
              }
              placeholderSrc={
                awayTeamMiddle
                  ? `api/v1/teams/teams-photo/${awayTeamMiddle._id}`
                  : null
              }
            />
          </div>
        </div>
        <div
          className="matchcard-ticket cursor-pointer"
          onClick={() => navigate("/ticket")}
        >
          <h1>TICKET</h1>
        </div>
      </div>

      {/* card 3  */}

      <div className="matchcard matchcard-side">
        <div className="matchcard-h1">
          <h1>
            {match[1] && match[1].date
              ? dayjs(match.filter((m) => !m.done)[1]?.date).format(
                  "DD MMM YYYY"
                )
              : ""}{" "}
          </h1>
        </div>
        <div className=" w-[100%] h-[100%] flex flex-col">
          <div className="matchcard-rightside-time w-[100%] h-[20%] text-[30px] text-slate-900 text-center font-bold">
            {match[1] && match[1].slug
              ? match.filter((m) => !m.done)[1]?.slug.split("-")[0]
              : ""}{" "}
          </div>
          <div className="flex flex-grow  w-[100%]">
            <div className="flex flex-col flex-[3] ">
              <div className="flex-[3]  flex justify-center">
                <div className="matchcard-side-logo  text-slate-900 relative">
                  {/* <img
                    src={
                      homeTeamthird
                        ? `api/v1/teams/teams-photo/${homeTeamthird._id}`
                        : null
                    }
                    alt={
                      homeTeamthird ? homeTeamthird.teamname : "Unknown Team"
                    }
                  /> */}
                  <LazyLoadImage
                    alt={
                      homeTeamthird ? homeTeamthird.teamname : "Unknown Team"
                    }
                    width="200px"
                    height="100%"
                    effect="blur"
                    src={
                      homeTeamthird
                        ? `api/v1/teams/teams-photo/${homeTeamthird._id}`
                        : null
                    }
                    placeholderSrc={
                      homeTeamthird
                        ? `api/v1/teams/teams-photo/${homeTeamthird._id}`
                        : null
                    }
                  />
                </div>
              </div>
              <div className="flex-[2] ">
                <div className=" text-center text-slate-900 font-bold">
                  {homeTeamthird ? homeTeamthird.teamname : "no"}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-top flex-[4] ">
              <div className="text-[16px] font-bold text-slate-900 text-center">
                Kickoff
              </div>
              <div>
                <div className="matchcard-rightside-time text-[42px] font-bold">
                  {match[1] && match[1].date
                    ? match.filter((m) => !m.done)[1]?.time
                    : ""}{" "}
                </div>
              </div>
              <div className="text-[12px] font-bold text-slate-900 text-center">
                LIVE
              </div>
              <div>
                <div className="text-[12px] text-slate-900 text-center">
                  {match[1] && match[1].date
                    ? match.filter((m) => !m.done)[1]?.stadium
                    : ""}{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-[3] ">
              <div className="flex-[3]  flex justify-center">
                <div className="matchcard-side-logo  text-slate-900 relative">
                  {/* <img
                    src={
                      awayTeamthird
                        ? `api/v1/teams/teams-photo/${awayTeamthird._id}`
                        : null
                    }
                    alt={
                      awayTeamthird ? awayTeamthird.teamname : "Unknown Team"
                    }
                  /> */}
                  <LazyLoadImage
                    alt={
                      awayTeamthird ? awayTeamthird.teamname : "Unknown Team"
                    }
                    width="200px"
                    height="100%"
                    effect="blur"
                    src={
                      awayTeamthird
                        ? `api/v1/teams/teams-photo/${awayTeamthird._id}`
                        : null
                    }
                    placeholderSrc={
                      awayTeamthird
                        ? `api/v1/teams/teams-photo/${awayTeamthird._id}`
                        : null
                    }
                  />
                </div>
              </div>
              <div className="flex-[2]">
                <div className=" text-center text-slate-900 font-bold">
                  {awayTeamthird ? awayTeamthird.teamname : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="matchcard-ticket cursor-pointer"
          onClick={() => navigate("/ticket")}
        >
          <h1>TICKET</h1>
        </div>
      </div>
    </div>
  );
};

export default Match;
