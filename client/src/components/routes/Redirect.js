import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Redirect = ({ path }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 && navigate("/");
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-center text-2xl text-slate-50">
          Redirecting to you in {count} second{" "}
        </h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden text-slate-100 text-xl">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
};

export default Redirect;
