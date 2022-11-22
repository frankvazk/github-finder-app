import { createContext, useReducer } from "react";
import gitHubReducer from "./githubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const searchUsers = async (query) => {
    setLoading();
    const params = new URLSearchParams({
      q: query,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    if (!data) {
      dispatch({ type: "GET_USERS", payload: [] });
    } else {
      dispatch({ type: "GET_USERS", payload: data.items });
    }
  };

  const getUser = async (login) => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 404) {
      dispatch({ type: "NOT_FOUND" });
    } else {
      const data = await res.json();
      dispatch({ type: "SET_USER", payload: data });
    }
  };

  const getUserRepos = async (login) => {
    setLoading();
    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });
    const res = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    if (!data) {
      dispatch({ type: "GET_REPOS", payload: [] });
    } else {
      dispatch({ type: "GET_REPOS", payload: data });
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const clearSearch = () => dispatch({ type: "CLEAR_SEARCH" });

  const data = {
    users: state.users,
    loading: state.loading,
    user: state.user,
    repos: state.repos,
    searchUsers,
    clearSearch,
    getUser,
    getUserRepos,
  };

  return (
    <GithubContext.Provider value={data}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;
