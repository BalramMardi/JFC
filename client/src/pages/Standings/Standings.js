import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import goa from "../../img/logo/goa.png";

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map team names to local images
  const teamLogos = {
    "Chennaiyin FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Chennaiyin_FC_logo.svg/300px-Chennaiyin_FC_logo.svg.png",
    "Bengaluru FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Bengaluru_FC_logo.svg/255px-Bengaluru_FC_logo.svg.png",
    "Punjab FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/48/Punjab_FC_official_logo.svg/300px-Punjab_FC_official_logo.svg.png",
    "Jamshedpur FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Jamshedpur_FC_logo.svg/270px-Jamshedpur_FC_logo.svg.png",
    "Mohun Bagan Super Giant":
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Mohun_Bagan_Super_Giant.svg/270px-Mohun_Bagan_Super_Giant.svg.png",
    "Kerala Blasters FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Kerala_Blasters_FC_logo.svg/225px-Kerala_Blasters_FC_logo.svg.png",
    "NorthEast United FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/NorthEast_United_FC_logo.svg/225px-NorthEast_United_FC_logo.svg.png",
    "Mumbai City FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Mumbai_City_FC_logo.svg/270px-Mumbai_City_FC_logo.svg.png",
    "FC Goa":
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/22/FC_Goa_logo.svg/285px-FC_Goa_logo.svg.png",
    "Mohammedan SC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Mohammedan_SC_%28Kolkata%29.svg/270px-Mohammedan_SC_%28Kolkata%29.svg.png",
    "Odisha FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/Odisha_FC_logo.svg/233px-Odisha_FC_logo.svg.png",
    "East Bengal FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/East_Bengal_FC_logo.svg/300px-East_Bengal_FC_logo.svg.png",
    "Hyderabad FC":
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Hyderabad_Football_Club.svg/195px-Hyderabad_Football_Club.svg.png",
  };

  const getIslApi = () => {
    axios
      .get("https://islstandings.vercel.app/api/isl-table", { proxy: false })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getIslApi();
  }, []);

  return (
    <div>
      <div className="schedule-bucket">
        <div className="schedule-container">
          <div className="text-[30px] font-bold uppercase">Standings</div>

          {loading ? (
            <div className="flex items-center justify-center mt-2">
              <div className="animate-spin rounded-full border-t-4 border-solid border-r-4 border-gray-400 h-16 w-16"></div>
            </div>
          ) : (
            <>
              <div className="schedule-container-top mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Super_League_logo.svg/315px-Indian_Super_League_logo.svg.png"
                  alt="logo"
                  style={{ width: "80px" }}
                  className="ml-[50%]"
                />
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase ">
                    <tr className="text-center text-xs">
                      <th scope="col" className="w-[1px] h-full"></th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-3 text-center"></th>
                      <th scope="col" className="px-6 py-3">
                        Teams
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Points
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Played
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Wins
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Draws
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Losses
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GF
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GA
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GD
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {data.map((team, index) => {
                      const rowClassName =
                        index % 2 === 0
                          ? "bg-[#F8F8F8] text-black text-lg"
                          : "bg-[#FFFFFF] text-black text-lg";

                      const jfcBG =
                        "text-white bg-gradient-to-r from-blue-900 to-red-700 text-lg";

                      const isJfc =
                        team.team === "Jamshedpur FC" ? jfcBG : rowClassName;

                      const greenDiv =
                        index < 6
                          ? "pt-1 pb-1 w-[6px] h-14 flex justify-center item-center"
                          : "";

                      // Get the local team logo
                      const teamLogo =
                        teamLogos[team.team] || "/images/default.png"; // Use default image if team not found

                      return (
                        <tr className={isJfc} key={index}>
                          <td className={greenDiv}>
                            <span className="bg-blue-900 w-[100%] border-red-700"></span>
                          </td>

                          <td className="text-lg font-bold">{team.position}</td>
                          <td className="text-lg font-bold">
                            <img
                              src={teamLogo}
                              alt={team.team}
                              style={{ width: "40px" }}
                            />
                          </td>
                          <td className="px-6 py-4 text-base font-semibold">
                            {team.team}
                          </td>
                          <td className="px-6 py-4 font-bold">{team.points}</td>
                          <td className="px-6 py-4">{team.matchesPlayed}</td>
                          <td className="px-6 py-4">{team.matchesWon}</td>
                          <td className="px-6 py-4">{team.matchesDrawn}</td>
                          <td className="px-6 py-4">{team.matchesLost}</td>
                          <td className="px-6 py-4">{team.goalsFor}</td>
                          <td className="px-6 py-4">{team.goalsAgainst}</td>
                          <td className="px-6 py-4">
                            {team.goalsFor - team.goalsAgainst}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Standings;

/* import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getIslApi = () => {
    axios
      .get("https://islstandings.vercel.app/api/isl-table", { proxy: false })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getIslApi();
  }, []);

  return (
    <div>
      <div className="schedule-bucket">
        <div className="schedule-container">
          <div className="text-[30px] font-bold uppercase">Standings</div>

          {loading ? (
            <div className="flex items-center justify-center mt-2">
              <div className="animate-spin rounded-full border-t-4 border-solid border-r-4 border-gray-400 h-16 w-16"></div>
            </div>
          ) : (
            <>
              <div className="schedule-container-top mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Indian_Super_League_logo.svg/315px-Indian_Super_League_logo.svg.png"
                  alt="logo"
                  style={{ width: "80px" }}
                  className="ml-[50%]"
                />
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase ">
                    <tr className="text-center text-xs">
                      <th scope="col" className="w-[1px] h-full"></th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Position
                      </th>
                      <th scope="col" className="px-6 py-3 text-center"></th>
                      <th scope="col" className="px-6 py-3">
                        Teams
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Points
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Played
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Wins
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Draws
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Losses
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GF
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GA
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GD
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {data.map((team, index) => {
                      const rowClassName =
                        index % 2 === 0
                          ? "bg-[#F8F8F8] text-black text-lg"
                          : "bg-[#FFFFFF] text-black text-lg";

                      const jfcBG =
                        "text-white bg-gradient-to-r from-blue-900 to-red-700 text-lg";

                      const isJfc =
                        team.team === "Jamshedpur FC" ? jfcBG : rowClassName;

                      const greenDiv =
                        index < 6
                          ? "pt-1 pb-1 w-[6px] h-14 flex justify-center item-center"
                          : "";

                      return (
                        <tr className={isJfc} key={index}>
                          <td className={greenDiv}>
                            <span className="bg-blue-900 w-[100%] border-red-700"></span>
                          </td>

                          <td className="text-lg font-bold">{team.position}</td>
                          <td className="text-lg font-bold">
                            <img
                              src={team.logo}
                              alt={team.team}
                              style={{ width: "40px" }}
                            />
                          </td>
                          <td className="px-6 py-4 text-base font-semibold">
                            {team.team}
                          </td>
                          <td className="px-6 py-4 font-bold">{team.points}</td>
                          <td className="px-6 py-4">{team.matchesPlayed}</td>
                          <td className="px-6 py-4">{team.matchesWon}</td>
                          <td className="px-6 py-4">{team.matchesDrawn}</td>
                          <td className="px-6 py-4">{team.matchesLost}</td>
                          <td className="px-6 py-4">{team.goalsFor}</td>
                          <td className="px-6 py-4">{team.goalsAgainst}</td>
                          <td className="px-6 py-4">
                            {team.goalsFor - team.goalsAgainst}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Standings;
 */
