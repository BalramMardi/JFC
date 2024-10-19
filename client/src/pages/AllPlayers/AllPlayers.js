import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import "./allplayers.css";

const squad = [
  {
    id: 1,
    position: "Goalkeeper",
  },
  {
    id: 2,
    position: "Defender",
  },
  {
    id: 3,
    position: "Midfielder",
  },
  {
    id: 4,
    position: "Forward",
  },
  {
    id: 5,
    position: "Coach",
  },
];

const AllPlayers = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllPlayers = async () => {
    try {
      const { data } = await axios.get("api/v1/player/get-players");

      if (data?.success) {
        setAllPlayers(data.players);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <div>
      <div className="mt-[114px] flex flex-col justify-center items-center w-[100%] h-fit p-4">
        <div className="text-slate-200 mt-4 text-5xl font-semibold">Squad</div>

        {loading ? (
          <div className="flex items-center justify-center mt-8">
            <div className="animate-spin rounded-full border-t-4 border-solid border-r-4 border-gray-400 h-16 w-16"></div>
          </div>
        ) : (
          <div className="bg-slate-50 p-4 mt-6 w-[100%] h-fit rounded-xl">
            {squad.map((c) => {
              return (
                <div key={c.id} className="squad-section ml-6 mt-4">
                  <div className="squad-position text-4xl font-bold text-sky-700">
                    {c.position}
                  </div>
                  <div className="players-list flex flex-wrap">
                    {allPlayers
                      .filter((player) => player.position === c.position)
                      .map((p) => {
                        return (
                          <div className="player-card mt-4">
                            <div key={p._id} className="player-card-container">
                              <div className="player-card-image">
                                <LazyLoadImage
                                  alt={p.name}
                                  width="100%"
                                  height="100%"
                                  effect="blur"
                                  src={`api/v1/player/players-photo/${p._id}`}
                                  placeholderSrc={`api/v1/player/players-photo/${p._id}`}
                                />
                              </div>
                              <div className="player-card-topback"></div>

                              <div className="player-info">
                                <div className="player-info-top">
                                  <div className="player-info-number">
                                    {p.position !== "Coach" ? p.number : null}
                                  </div>
                                  <div className="player-info-name">
                                    {p?.name?.split(" ")[0]}{" "}
                                    {
                                      p?.name?.split(" ")[
                                        p?.name?.split(" ").length - 1
                                      ]
                                    }
                                  </div>
                                </div>
                                <div className="player-info-position">
                                  {p.position}
                                </div>
                                <div className="player-info-back">
                                  {p?.name?.split(" ")[1]}
                                </div>
                              </div>
                              {p.position !== "Coach" ? (
                                <div className="player-extra">
                                  <div className="player-extra-appear">
                                    <div className="player-extra-appear-title">
                                      Appearance
                                    </div>
                                    <div className="player-extra-appear-number">
                                      {p.appears}
                                    </div>
                                  </div>
                                  <div className="player-extra-goals">
                                    <div className="player-extra-goals-title">
                                      {p.position === "Goalkeeper"
                                        ? "Save"
                                        : "Goal"}{" "}
                                    </div>
                                    <div className="player-extra-goals-number">
                                      {p.goals}
                                    </div>
                                  </div>
                                  <div className="player-extra-assist">
                                    <div className="player-extra-assist-title">
                                      {p.position === "Goalkeeper"
                                        ? "Clean Sheet"
                                        : "Assist"}{" "}
                                    </div>
                                    <div className="player-extra-assist-number">
                                      {p.assists}
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
