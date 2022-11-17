import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-8 text-8xl font-bold ">Opps!</h1>
          <p className="mb-8 text-5xl">404 - Page not found</p>
          <Link to="/" className="btn-primary btn-lg btn">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
