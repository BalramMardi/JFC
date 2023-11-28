import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import axios from "axios";

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

const players = [
  {
    _id: 4,
    name: "TP rehnesh",
    number: 1,
    position: "Goalkeeper",
    appears: 1,
    goals: 2,
    assists: 3,
    imgsrc:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTXiqCJ19mSPL6nNXEFbMRGg-Jo4KhEwr8NX1Ne0K8gmVIm-T6a",
  },
  {
    _id: 5,
    name: "Sergio Ramos",
    number: 1,
    position: "Defender",
    appears: 1,
    goals: 2,
    assists: 3,
    imgsrc:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcQ4Q9-v_IGNC45YKqEXJ0JJ-LPWwemoZ7scxRRFotTUyJGeJBXGnJ7d2tSUQmPANXCC8tubUQ",
  },
  {
    _id: 6,
    name: "Sergio Ramos",
    number: 1,
    position: "Midfielder",
    appears: 1,
    goals: 2,
    assists: 3,
    imgsrc:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcQ4Q9-v_IGNC45YKqEXJ0JJ-LPWwemoZ7scxRRFotTUyJGeJBXGnJ7d2tSUQmPANXCC8tubUQ",
  },
  {
    _id: 7,
    name: "Sergio Ramos",
    number: 1,
    position: "Forward",
    appears: 1,
    goals: 2,
    assists: 3,
    imgsrc:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcQ4Q9-v_IGNC45YKqEXJ0JJ-LPWwemoZ7scxRRFotTUyJGeJBXGnJ7d2tSUQmPANXCC8tubUQ",
  },
  {
    _id: 8,
    name: "Sergio Ramos",
    number: 1,
    position: "Coach",
    appears: 1,
    goals: 2,
    assists: 3,
    imgsrc:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcQ4Q9-v_IGNC45YKqEXJ0JJ-LPWwemoZ7scxRRFotTUyJGeJBXGnJ7d2tSUQmPANXCC8tubUQ",
  },
  {
    _id: 9,
    name: "Iker Casillas",
    number: 1,
    position: "Goalkeeper",
    appears: 1,
    goals: 2,
    assists: 3,
    imgsrc:
      "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fjpeg&blobkey=id&blobtable=MungoBlobs&blobwhere=1203361428742&ssbinary=true",
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
    <Layout>
      <div className="mt-[114px] flex flex-col justify-center items-center w-[100%] h-fit p-4">
        <div className="text-slate-200 mt-4 text-5xl font-semibold">Squad</div>

        {loading ? (
          <div className="flex items-center justify-center mt-8">
            <div className="animate-spin rounded-full border-t-4  border-solid border-r-4 border-gray-400 h-16 w-16"></div>
          </div>
        ) : (
          <div className="bg-slate-50 p-4 mt-6 w-[100%] h-fit rounded-xl">
            {squad.map((c) => {
              return (
                <div key={c.id} className="ml-6 mt-4">
                  <div className="text-4xl font-bold text-sky-700 ">
                    {c.position}
                  </div>
                  <div className="flex flex-wrap">
                    {allPlayers
                      .filter((player) => player.position === c.position)
                      .map((p) => {
                        return (
                          <div className="mt-4">
                            <div key={p._id} className="players-cards">
                              <div className="players-cards-img">
                                <img
                                  src={`api/v1/player/players-photo/${p._id}`}
                                  // src={p.imgsrc}
                                  alt={p.name}
                                />
                              </div>
                              <div className="players-cards-topback"></div>

                              <div className="players-info">
                                <div className="players-info-top">
                                  <div className="players-info-number">
                                    {p.position !== "Coach" ? p.number : null}
                                  </div>
                                  <div className="players-info-name">
                                    {p?.name?.split(" ")[0]}{" "}
                                    {
                                      p?.name?.split(" ")[
                                        p?.name?.split(" ").length - 1
                                      ]
                                    }
                                  </div>
                                </div>
                                <div className="players-info-position">
                                  {p.position}
                                </div>
                                <div className="players-info-back">
                                  {p?.name?.split(" ")[1]}
                                </div>
                              </div>
                              {p.position !== "Coach" ? (
                                <div className="players-extra">
                                  <div className="players-extra-appear">
                                    <div className="players-extra-appear-title">
                                      Appearance
                                    </div>
                                    <div className="players-extra-appear-number">
                                      {p.appears}
                                    </div>
                                  </div>
                                  <div className="players-extra-goals">
                                    <div className="players-extra-goals-title">
                                      {p.position === "Goalkeeper"
                                        ? "Save"
                                        : "Goal"}{" "}
                                    </div>
                                    <div className="players-extra-goals-number">
                                      {p.goals}
                                    </div>
                                  </div>
                                  <div className="players-extra-assist">
                                    <div className="players-extra-goals-title">
                                      {p.position === "Goalkeeper"
                                        ? "Clean Sheet"
                                        : "Assist"}{" "}
                                    </div>
                                    <div className="players-extra-goals-number">
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
    </Layout>
  );
};

export default AllPlayers;
