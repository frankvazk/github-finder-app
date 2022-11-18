import React from "react";
import spinner from "./assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading"
        width="180"
        className="mx-auto text-center"
      />
    </div>
  );
};

export default Spinner;
