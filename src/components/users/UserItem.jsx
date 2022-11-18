import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="side card compact bg-base-100 shadow-md">
      <div className="card-body flex-row items-center space-x-4">
        <div>
          <div className="avatar">
            <div className="h-14 w-14 rounded-full shadow">
              <img src={user.avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/users/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;