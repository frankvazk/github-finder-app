import React, { useContext, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  FaHome,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import GithubContext from "../context/github/githubContext";
import Spinner from "../components/layout/Spinner";

const User = () => {
  const { login } = useParams();
  const { user, getUser, loading } = useContext(GithubContext);
  useEffect(() => {
    getUser(login);
  }, []);

  if (!loading && user === null) {
    return <Navigate to="/not-found" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="mx-auto w-full lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn-ghost btn">
            Back to Search
          </Link>
        </div>
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="card image-full rounded-lg shadow-xl">
              <figure>
                <img src={user.avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{user.name}</h2>
                <p className="flex-grow-0">{user.login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="card-title text-3xl">
                {user.name}
                <div className="badge badge-success ml-2 mr-1">{user.type}</div>
                {user.hireable && (
                  <div className="badge badge-info mx-1">Hireable</div>
                )}
              </h1>
              <p>{user.bio}</p>
              <div className="card-actions mt-4">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline btn"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
