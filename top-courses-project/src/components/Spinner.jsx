import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="loader"></div>{" "}
      <p className="text-bg-Dark text-lg font-semibold">Loading...</p>{" "}
    </div>
  );
}

export default Spinner;
