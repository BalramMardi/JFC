import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import axios from "axios";

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
const TicketItems = [
  {
    id: 1,
    name: "Basic",
    price: "₹150",
  },
  {
    id: 2,
    name: "Flex",
    price: "₹350",
  },
  {
    id: 3,
    name: "V.I.P.",
    price: "₹1499",
  },
];

const TicketPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const leagueArray = params.slug?.split("-");

  const [Cdate, setCdate] = useState();
  const [Ctime, setCtime] = useState("");
  const [Cmatchday, setCmatchday] = useState("");
  const [selectedLeague, setSelectedLeague] = useState();
  const [selecthome, setSelectHome] = useState();
  const [selectaway, setSelectAway] = useState();
  const [homeStadium, setHomeStadium] = useState("");
  const [pid, setPid] = useState("");
  const [loading, setLoading] = useState(true);

  const getMatch = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/match/get-match/${params.slug}`
      );
      const storedDate = data.match.date;
      const formattedDate = dayjs(storedDate);

      setCdate(formattedDate);

      // setCdate(data.match.date);
      setCmatchday(data.match.matchday);
      setSelectedLeague(data.match.league);
      setSelectHome(data.match.home);
      setSelectAway(data.match.away);
      setHomeStadium(data.match.stadium);
      setCtime(data.match.time);
      setPid(data.match._id);
      // setPhoto(data.news.photo);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMatch();
  }, []);

  return (
    <Layout>
      <div className="flex text-slate-300 justify-center items-center h-[500px] gap-8 mt-[114px]">
        {TicketItems.map((c) => {
          return (
            <div
              className="h-[26rem] w-72 border border-solid border-white rounded-2xl flex flex-col items-center justify-center hover:bg-white hover:bg-opacity-5"
              key={c.id}
            >
              <div className="text-2xl">{c.name}</div>
              <div
                className="bg-yellow-500 text-black h-8 w-24 flex justify-center items-center cursor-pointer hover:bg-red-700 hover:text-slate-50"
                onClick={() => {
                  navigate(`/ticket/match/${params.slug}/${c.name}`);
                }}
              >
                Buy
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-center text-white text-6xl italic">
        {leagueArray[2]} V {leagueArray[3]}
      </h1>
      <h1 className="text-center text-white text-xl italic">{homeStadium}</h1>
      <div className=" text-white text-xl italic flex justify-center gap-4">
        <h1 className="text-center text-white text-xl italic">
          {dayjs(Cdate).format("DD-MM-YYYY ")}
        </h1>
        <h1 className="text-center text-white text-xl italic">{Ctime} pm</h1>
      </div>
    </Layout>
  );
};

export default TicketPage;

/* */
