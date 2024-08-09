import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";

const Standings = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getStandings = () => {
    axios
      .get(
        "https://api-football-standings.azharimm.dev/leagues/ind.1/standings?season=2023&sort=asc",
        { proxy: false }
      )
      .then((res) => {
        console.log(res.data.data);
        console.log(res.data.data.standings);

        setData(res.data.data.standings);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getStandings();
  }, []);

  return (
    <Layout title={"Standings"}>
      <div className="schedule-bucket">
        <div className="schedule-container">
          <div className="text-[30px] font-bold uppercase">Standings</div>

          {loading ? (
            <div className="flex items-center justify-center mt-2">
              <div className="animate-spin rounded-full border-t-4  border-solid border-r-4 border-gray-400 h-16 w-16"></div>
            </div>
          ) : (
            <>
              <div className="schedule-container-top mb-4 ">
                {/* <h1 className=" ml-[50%] ">ISL</h1> */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/6/67/Indian_Super_League.png"
                  alt="logo"
                  style={{ width: "80px" }}
                  className="ml-[50%]"
                />
              </div>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase ">
                    <tr className="text-center text-xs">
                      <th
                        scope="col"
                        className="text-center w-[1px] h-full "
                      ></th>
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
                    {data.map((data, index) => {
                      const rowClassName =
                        index % 2 === 0
                          ? "bg-[#F8F8F8] text-black text-lg"
                          : "bg-[#FFFFFF] text-black text-lg";

                      const jfcBG =
                        "text-white bg-gradient-to-r from-blue-900 to-red-700 text-lg";

                      const isJfc =
                        data?.team?.name === "Jamshedpur FC"
                          ? jfcBG
                          : rowClassName;

                      const greenDiv =
                        index < 6
                          ? "pt-1 pb-1  w-[6px] h-14 flex justify-center item-center"
                          : "";

                      return (
                        <tr
                          // className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                          className={isJfc}
                          // className="bg-green-500 "
                          key={index}
                        >
                          <td className={greenDiv}>
                            <span className=" bg-blue-900 w-[100%] border-red-700"></span>
                          </td>

                          <td className="text-lg font-bold">
                            {data?.stats?.[10]?.displayValue}
                          </td>
                          <td className="text-lg font-bold">
                            <img
                              src={data?.team?.logos[0]?.href}
                              alt={data?.team?.name}
                              style={{ width: "40px" }}
                            />
                          </td>
                          <td className="px-6 py-4 text-base font-semibold">
                            {" "}
                            {data?.team?.name}
                          </td>
                          <td className="px-6 py-4 font-bold">
                            {data?.stats?.[3]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[0]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[7]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[6]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[1]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[5]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[4]?.displayValue}
                          </td>
                          <td className="px-6 py-4">
                            {data?.stats?.[2]?.displayValue}
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
    </Layout>
  );
};

export default Standings;
