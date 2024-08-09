import "./footer.css";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#0C1925] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Jamshedpur FC</h1>
            <p className="text-sm">© 2024 All rights reserved.</p>
          </div>
          <div className="flex space-x-4 ">
            <div
              onClick={() => navigate("/privacy-policy")}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Privacy Policy
            </div>
            <div
              onClick={() => navigate("/terms-and-conditions")}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Terms and Conditions
            </div>
            <div
              onClick={() => navigate("/aboutus")}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              About us
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/JamshedpurFC"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook size={"2em"} />
          </a>
          <a
            href="https://www.instagram.com/jamshedpurfc"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={"2em"} />
          </a>
          <a
            href="https://x.com/JamshedpurFC"
            className="text-gray-400 hover:text-white"
          >
            <FaXTwitter size={"2em"} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
