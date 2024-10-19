import React from "react";
import "./spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-bucket">
      <div className="spinner-container">
        <h1> </h1>
        <div className="flex items-center justify-center mt-2 ">
          <div className=" animate-spin rounded-full border-t-4  border-solid border-r-4 border-gray-400 h-16 w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
// border-radius: 20px 20px 0 0;
