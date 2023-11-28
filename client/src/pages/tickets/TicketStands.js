import React, { useState } from "react";
import Layout from "../../layout/Layout";
import { useNavigate, useParams } from "react-router";

const basicStand = [
  {
    id: 1,
    name: "North Stand",
    price: "₹150",
  },
  {
    id: 2,
    name: "East Stand",
    price: "₹350",
  },
];
const flexStand = [
  {
    id: 1,
    name: "North Stand",
    price: "₹150",
  },
  {
    id: 2,
    name: "East Stand",
    price: "₹350",
  },
];
const vipStand = [
  {
    id: 1,
    name: "North Stand",
    price: "₹150",
  },
  {
    id: 2,
    name: "East Stand",
    price: "₹350",
  },
];
const TicketStands = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Layout>
      <div className="relative">
        <h1 className="absolute top-3/4 left-0 transform -translate-y-1/2 -rotate-90 origin-left text-white text-6xl translate-x-1/2">
          {params.name}
        </h1>
        <div className="flex text-slate-300 justify-center items-center h-[640px] gap-8 mt-12">
          {flexStand.map((c) => {
            return (
              <div
                className="h-[26rem] w-72 border border-solid border-white rounded-2xl flex flex-col items-center justify-center hover:bg-white hover:bg-opacity-5"
                key={c.id}
                onClick={() => {
                  navigate(`/ticket/match/${params.slug}/${c.name}`);
                }}
              >
                <div className="text-2xl">{c.name}</div>
              </div>
            );
          })}
        </div>
        <h1 className="absolute top-3/4 right-0 transform -translate-y-3/4 rotate-90 origin-right text-white text-6xl -translate-x-1/2">
          Ticket
        </h1>
      </div>
    </Layout>
  );
};

export default TicketStands;

/* */
