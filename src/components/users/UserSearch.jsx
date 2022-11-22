import React, { useContext, useState } from "react";
import AlertContext from "../../context/alert/alertContext";
import GithubContext from "../../context/github/githubContext";
import { searchUsers } from "../../context/github/GitHubActions";

const UserSearch = () => {
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const data = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: data });
      setText("");
    }
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="input input-lg w-full bg-gray-200 pr-40 text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn-lg btn absolute top-0 right-0 w-36 rounded-l-none"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className="btn-ghost btn-lg btn"
            onClick={() => dispatch({ type: "CLEAR_SEARCH" })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
