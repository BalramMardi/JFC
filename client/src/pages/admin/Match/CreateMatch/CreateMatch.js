import "./createMatch.css";

import React, { useEffect, useState } from "react";

import axios from "axios";
import { DatePicker, Select } from "antd";
import AdminMenu from "../../../AdminMenu";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
const { Option } = Select;

dayjs.extend(utc);
dayjs.extend(timezone);

const CreateMatch = () => {
  const navigate = useNavigate();

  dayjs.extend(customParseFormat);
  const today = dayjs();
  const [league, setLeague] = useState([]);
  const [team, setTeam] = useState([]);

  const [Cdone, setCdone] = useState("false");
  const [Cdate, setCdate] = useState(new Date());

  const [Cmatchday, setCmatchday] = useState("");
  const [Ctime, setCtime] = useState("8:00");

  const [selectedLeague, setSelectedLeague] = useState();
  const [home, setHome] = useState();
  const [away, setAway] = useState();
  const [isneutral, setIsneutral] = useState(false);
  const [homeStadium, setHomeStadium] = useState("");

  const getAllLeague = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/league/get-league`
      );

      if (data?.success) {
        setLeague(data?.league);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAllTeam = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/teams/get-teams`
      );

      if (data?.success) {
        setTeam(data?.teams);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/match/create-match`,
        {
          league: selectedLeague,
          home: home,
          away: away,
          neutral: isneutral,
          done: Cdone,
          stadium: homeStadium,
          matchday: Cmatchday,
          date: Cdate,
          time: Ctime,
        }
      );

      if (data?.success) {
        toast.success(data?.message);
        navigate("/admin/matches");
      } else {
        toast.error("match was not created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLeague();
    getAllTeam();
  }, []);

  return (
    <div className="createNews-container">
      <AdminMenu />
      <div className="createNews-right">
        <form>
          <div className="ml-20">
            <div className="border-b border-gray-900/10 pb-5 mt-10">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Create Match
              </h2>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  League
                </label>
                <div className="mt-2">
                  <Select
                    bordered={false}
                    placeholder="Select a league"
                    size="large"
                    className="block w-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={(v) => {
                      setSelectedLeague(v);
                    }}
                    // value={selectedLeague}
                  >
                    {Array.isArray(league) &&
                      league.map((c) => (
                        <Option key={c._id} value={c._id}>
                          {c.leashort}
                        </Option>
                      ))}
                  </Select>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Home Team
                  </label>
                  <div className="mt-2">
                    <Select
                      bordered={false}
                      placeholder="Select a Home Team"
                      size="large"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(value) => {
                        setHome(value);

                        if (!isneutral) {
                          const selectedHomeTeam = team.find(
                            (t) => t._id === value
                          );
                          if (selectedHomeTeam) {
                            setHomeStadium(selectedHomeTeam.stadium);
                          } else {
                            setHomeStadium(""); // Set to an empty string if not found
                          }
                        }
                      }}
                    >
                      {team?.map((c) => (
                        <Option key={c._id} value={c._id}>
                          {c.teamname}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Away Team
                  </label>
                  <div className="mt-2">
                    <Select
                      bordered={false}
                      placeholder="Select a Away Team"
                      size="large"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(value) => {
                        setAway(value);
                      }}
                    >
                      {team?.map((c) => (
                        <Option key={c._id} value={c._id}>
                          {c.teamname}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Stadium
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={homeStadium}
                      onChange={(e) => {
                        if (isneutral) {
                          setHomeStadium(e.target.value);
                        }
                      }}
                      disabled={!isneutral}
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Matchday
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setCmatchday(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>

                  <div className="mt-2">
                    <DatePicker
                      defaultValue={today}
                      format="DD-MM-YYYY"
                      style={{ width: "200px", height: "36px" }}
                      //   onChange={(value) => {
                      //     setCdate(value);
                      //   }}
                      onChange={(value) => {
                        setCdate(value);
                      }}
                    />
                    {/* <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => {
                        setCdate(e.target.value);
                      }}
                    /> */}
                  </div>
                </div>
                <div className="sm:col-span-1 ml-4">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Time
                  </label>
                  <div className="mt-2">
                    <Select
                      bordered={false}
                      placeholder="Select a Time"
                      size="large"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      value={Ctime}
                      onChange={(value) => {
                        setCtime(value);
                      }}
                    >
                      <Option value={"8:00"}>8:00</Option>
                      <Option value={"5:30"}>5:30</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-5">
              <div className="mt-5 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Match status
                  </legend>
                  <div className="mt-6  flex gap-5">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={() => {
                            setIsneutral(!isneutral);
                          }}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900"
                        >
                          Neutral
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={(e) =>
                            setCdone(e.target.checked ? "true" : "false")
                          }
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900"
                        >
                          Done
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 mr-[50%] mb-4">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleCreate}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMatch;
