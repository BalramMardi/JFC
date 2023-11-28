/* import React, { useEffect, useRef, useState } from "react";
import "./time.css";
import axios from "axios";
import dayjs from "dayjs";

export default function Time() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [match, setMatch] = useState([]);

  const allmatch = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/match/get-match`
      );
      setMatch(data.match);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allmatch();
  }, []);



  let interval = useRef();

  const startTimer = () => {
    // const countdownDate = new Date(" 19 Nov,2023 00:00:00").getTime();
    // const countdownDate = new Date(`${nextTime} 00:00:00 GMT+0000`).getTime();
    const countdownDate = new Date(" 27 Nov,2023 08:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMin(min);
        setTimerSec(sec);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="time-container">
      <div className="time-days time-slate">
        <div className="time-var">
          {timerDays < 10 ? "0" + timerDays : timerDays}
        </div>
        <div className="time-let">Days</div>
      </div>
      :
      <div className="time-hour time-slate">
        <div className="time-var">
          {timerHours < 10 ? "0" + timerHours : timerHours}
        </div>
        <div className="time-let">Hours</div>
      </div>
      :
      <div className="time-min time-slate">
        <div className="time-var">
          {timerMin < 10 ? "0" + timerMin : timerMin}
        </div>
        <div className="time-let">Min</div>
      </div>
      :
      <div className="time-sec time-slate">
        <div className="time-var">
          {timerSec < 10 ? "0" + timerSec : timerSec}
        </div>
        <div className="time-let">Sec</div>
      </div>
    </div>
  );
}
 */

import React, { useEffect, useRef, useState } from "react";
import "./time.css";
import axios from "axios";
import dayjs from "dayjs";

export default function Time() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const [match, setMatch] = useState([]);

  const allmatch = async () => {
    try {
      const { data } = await axios.get("api/v1/match/get-match");
      setMatch(data.match);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allmatch();
  }, []);

  useEffect(() => {
    const nextDate =
      match[0] && match[0].date
        ? dayjs(match.filter((m) => !m.done)[0]?.date).format("DD MMM,YYYY")
        : null;

    const nextTime =
      match[0] && match[0].date ? match.filter((m) => !m.done)[0]?.time : null;

    let interval = setInterval(() => {
      const countdownDate = new Date(`${nextDate} ${nextTime}:00`).getTime();

      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days < 10 ? "0" + days : days.toString());
        setTimerHours(hours < 10 ? "0" + hours : hours.toString());
        setTimerMin(min < 10 ? "0" + min : min.toString());
        setTimerSec(sec < 10 ? "0" + sec : sec.toString());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [match]);

  return (
    <div className="time-container">
      <div className="time-days time-slate">
        <div className="time-var">{timerDays}</div>
        <div className="time-let">Days</div>
      </div>
      :
      <div className="time-hour time-slate">
        <div className="time-var">{timerHours}</div>
        <div className="time-let">Hours</div>
      </div>
      :
      <div className="time-min time-slate">
        <div className="time-var">{timerMin}</div>
        <div className="time-let">Min</div>
      </div>
      :
      <div className="time-sec time-slate">
        <div className="time-var">{timerSec}</div>
        <div className="time-let">Sec</div>
      </div>
    </div>
  );
}
