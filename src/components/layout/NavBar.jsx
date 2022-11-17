import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ title }) => {
  return (
    <nav className="navbar mb-12 bg-neutral text-neutral-content shadow-lg">
      <div className="container mx-auto">
        <div className="mx-2 flex-none px-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="align-middle text-lg font-bold">
            {title}
          </Link>
        </div>
        <div className="mx-2 flex-1 px-2">
          <div className="flex justify-end">
            <Link to="/" className="btn-ghost rounded-btn btn-sm btn">
              Home
            </Link>
            <Link to="/about" className="btn-ghost rounded-btn btn-sm btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Github Finder",
};

NavBar.propTypes = {
  title: PropTypes.string,
};

export default NavBar;
