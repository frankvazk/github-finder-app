import React, { useContext, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../context/github/githubContext";
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/repos/RepoList";
import { getUserAndRepos } from "../context/github/GitHubActions";

const User = () => {
  const { login } = useParams();
  const { user, repos, loading, dispatch } = useContext(GithubContext);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const data = await getUserAndRepos(login);
      if (data === null) {
        dispatch({ type: "NOT_FOUND" });
      } else {
        dispatch({ type: "SET_USER_AND_REPOS", payload: { ...data } });
      }
    };
    getUserData();
  }, [dispatch, login]);

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

            <div className="shado-md pg-base-100 stats w-full rounded-lg">
              {user.location && (
                <div className="stat">
                  <div className="text-md stat-title">Location</div>
                  <div className="stat-value text-lg">{user.location}</div>
                </div>
              )}
              {user.blog && (
                <div className="stat">
                  <div className="text-md stat-title">Website</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://${user.blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.blog}
                    </a>
                  </div>
                </div>
              )}
              {user.twitter_username && (
                <div className="stat">
                  <div className="text-md stat-title">Twitter</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://twitter/${user.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="stats mb-6 w-full rounded-lg bg-base-100 py-5 shadow-md">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {user.public_gists}
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
