import React, { useEffect, useState } from "react";
import "./allTicket.css";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

import axios from "axios";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import Redirect from "../../components/routes/Redirect";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const tgVar = 300;

const AllTicket = () => {
  const [match, setMatch] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [leagueData, setLeagueData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const matchDone = match.filter((m) => m.done).length;
  var tgnewVar = 459 + matchDone; //463

  return (
    <div>
      <div className="ticketnew-bucket">
        <div className="ticketnew-container">
          <h1 className="text-center">Tickets</h1>
          {loading ? (
            <div className="flex items-center justify-center mt-2">
              <div className="animate-spin rounded-full border-t-4  border-solid border-r-4 border-gray-400 h-16 w-16"></div>
            </div>
          ) : (
            match
              .filter(
                (match) =>
                  !match.done &&
                  teamData.find((team) => team._id === match.home)?.teamname ===
                    "Jamshedpur FC"
              )
              .map((c, index) => {
                const homeTeam = teamData.find((team) => team._id === c.home);
                const awayTeam = teamData.find((team) => team._id === c.away);
                const leagueUsed = leagueData.find(
                  (lea) => lea._id === c.league
                );

                {
                  /* const sum = index + matchDone + tgVar;  */
                }
                const sum = index + tgnewVar;

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
                      {/* <img
                        // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                        // alt={homeTeam}
                        src={
                          leagueUsed
                            ? `api/v1/league/league-photo/${leagueUsed._id}`
                            : null
                        }
                        alt={leagueUsed ? leagueUsed.leaname : "Unknown Team"}
                      /> */}
                      <LazyLoadImage
                        alt={homeTeam}
                        width="100%"
                        height="100%"
                        effect="blur"
                        src={
                          leagueUsed
                            ? `api/v1/league/league-photo/${leagueUsed._id}`
                            : null
                        }
                        placeholderSrc={
                          leagueUsed
                            ? `api/v1/league/league-photo/${leagueUsed._id}`
                            : null
                        }
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
                        {/* <img
                          // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                          // alt={homeTeam}
                          src={
                            homeTeam
                              ? `api/v1/teams/teams-photo/${homeTeam._id}`
                              : null
                          }
                          alt={homeTeam ? homeTeam.teamname : "Unknown Team"}
                        /> */}
                        <LazyLoadImage
                          alt={homeTeam}
                          width="100%"
                          height="100%"
                          effect="blur"
                          src={
                            homeTeam
                              ? `api/v1/teams/teams-photo/${homeTeam._id}`
                              : null
                          }
                          placeholderSrc={
                            homeTeam
                              ? `api/v1/teams/teams-photo/${homeTeam._id}`
                              : null
                          }
                        />
                      </div>
                      <div className="scmain-v">VS</div>
                      <div className="scmain-awaypic">
                        {/* <img
                          // src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${homeTeam._id}`}
                          // alt={homeTeam}
                          src={
                            awayTeam
                              ? `api/v1/teams/teams-photo/${awayTeam._id}`
                              : null
                          }
                          alt={awayTeam ? awayTeam.teamname : "Unknown Team"}
                        /> */}
                        <LazyLoadImage
                          alt={awayTeam}
                          width="100%"
                          height="100%"
                          effect="blur"
                          src={
                            awayTeam
                              ? `api/v1/teams/teams-photo/${awayTeam._id}`
                              : null
                          }
                          placeholderSrc={
                            awayTeam
                              ? `api/v1/teams/teams-photo/${awayTeam._id}`
                              : null
                          }
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
                      // onClick={() => {
                      //   navigate(`/ticket/match/${c.slug}`);
                      // }}
                      // to={`https://in.ticketgenie.in/SelectStand/jamshedpur-fc-matches-2023-24/${encodeURIComponent(sum)}`}
                      to={`https://in.ticketgenie.in/SelectStand/Jamshedpur-FC-Home-Games-2024-25/${sum}#!`}
                      target="_blank"
                    >
                      <div className="scticket-info">TICKET</div>
                    </Link>

                    <div className="scline"></div>
                  </div>
                );
              })
          )}
        </div>
      </div>
    </div>
  );
};

export default AllTicket;
