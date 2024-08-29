import { useNavigate } from "react-router";
import "./tickets.css";

import React from "react";

const Tickets = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ticket-container">
        <div className="ticket-header">
          <h1>JFC Tickets</h1>
        </div>
        <div className="ticket-bottom" onClick={() => navigate("/ticket")}>
          <div className="ticket-tiles"></div>
          {/* <div className="ticket-tiles">Stadium Tour</div> */}
        </div>
      </div>
      <div className="line-match"></div>
    </>
  );
};

export default Tickets;
