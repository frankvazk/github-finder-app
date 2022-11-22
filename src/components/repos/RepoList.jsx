import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const RepoList = ({ repos }) => {
  return (
    <div className="card rounded-lg bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title my-4 text-3xl font-bold">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.name} />
        ))}
      </div>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
