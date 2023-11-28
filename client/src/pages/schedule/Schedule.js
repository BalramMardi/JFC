import "./schedule.css";
import React, { useEffect, useState } from "react";

import Layout from "../../layout/Layout";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

import axios from "axios";
import { Link } from "react-router-dom";
const tgVar = 300;

const matches = [
  {
    no: 1,
    day: 1,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 2,
    day: 2,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 3,
    day: 3,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 4,
    day: 4,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
  {
    no: 5,
    day: 5,
    home: "Jamshedpur",
    away: "mohun bagan",
    stadium: "JRD Tata Sports Complex",
  },
];

const Schedule = () => {
  const [match, setMatch] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getAllMatch = async () => {
    try {
      const { data } = await axios.get("api/v1/match/get-match");

      setMatch(data.match);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
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

  const matchDone = match.filter((m) => m.done).length + 1;

  return (
    <Layout>
      <div className="schedule-bucket">
        <div className="schedule-container">
          <h1>First Team Schedule</h1>
          {loading ? (
            <div className="flex items-center justify-center mt-2">
              <div className="animate-spin rounded-full border-t-4  border-solid border-r-4 border-gray-400 h-16 w-16"></div>
            </div>
          ) : (
            match
              .filter((match) => !match.done)
              .map((c, index) => {
                const homeTeam = teamData.find((team) => team._id === c.home);
                const awayTeam = teamData.find((team) => team._id === c.away);
                const leagueUsed = leagueData.find(
                  (lea) => lea._id === c.league
                );

                let sumVar =
                  homeTeam?.teamname === "Jamshedpur FC"
                    ? tgVar + matchDone + index - 1
                    : tgVar + matchDone;

                return (
                  <div key={c._id} className="schedule-slate">
                    <div className="scline"></div>
                    <div className="scdate">
                      <div className="scdate-info">
                        <div>
                          {dayjs(c.date).format("ddd")}{" "}
                          {dayjs(c.date).format("DD MMM")}{" "}
                        </div>
                        <div>{c.time} pm</div>
                      </div>
                    </div>
                    <div className="scline-mid">
                      <div className="scline-mid-break"></div>
                    </div>
                    <div className="sctype">
                      <img
                        // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                        // alt={homeTeam}
                        src={
                          leagueUsed
                            ? `api/v1/league/league-photo/${leagueUsed._id}`
                            : null
                        }
                        alt={leagueUsed ? leagueUsed.leaname : "Unknown Team"}
                      />
                    </div>
                    <div className="scline-mid">
                      <div className="scline-mid-break"></div>
                    </div>
                    <div className="scnumber">
                      <div className="scnumber-info">
                        <div className="scnumber-info-number">
                          Match No.{c.matchday}
                        </div>
                        <div className="scnumber-info-stadium">{c.stadium}</div>
                      </div>
                    </div>
                    <div className="scline-mid">
                      <div className="scline-mid-break"></div>
                    </div>
                    <div className="scmain">
                      <div className="scmain-home">
                        {homeTeam ? homeTeam.teamname : "Unknown Team"}
                      </div>
                      <div className="scmain-homepic">
                        <img
                          // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                          // alt={homeTeam}
                          src={
                            homeTeam
                              ? `api/v1/teams/teams-photo/${homeTeam._id}`
                              : null
                          }
                          alt={homeTeam ? homeTeam.teamname : "Unknown Team"}
                        />
                      </div>
                      <div className="scmain-v">VS</div>
                      <div className="scmain-awaypic">
                        <img
                          // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                          // alt={homeTeam}
                          src={
                            awayTeam
                              ? `api/v1/teams/teams-photo/${awayTeam._id}`
                              : null
                          }
                          alt={awayTeam ? awayTeam.teamname : "Unknown Team"}
                        />
                      </div>
                      <div className="scmain-away">
                        {awayTeam ? awayTeam.teamname : "Unknown Team"}
                      </div>
                    </div>
                    <div className="scline-mid">
                      <div className="scline-mid-break"></div>
                    </div>
                    <Link
                      className="scticket"
                      to={
                        homeTeam?.teamname === "Jamshedpur FC"
                          ? `https://in.ticketgenie.in/SelectStand/jamshedpur-fc-matches-2023-24/${encodeURIComponent(
                              sumVar
                            )}`
                          : null
                      }
                      target={
                        homeTeam?.teamname === "Jamshedpur FC"
                          ? "_blank"
                          : "_self"
                      }
                    >
                      <div
                        className={
                          homeTeam?.teamname === "Jamshedpur FC"
                            ? "doneTicket"
                            : "notdoneTicket"
                        }
                      >
                        TICKET
                      </div>
                    </Link>
                    <div className="scline"></div>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
