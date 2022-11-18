import { createContext, useReducer } from "react";
import gitHubReducer from "./githubReducer";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
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

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const data = {
    users: state.users,
    loading: state.loading,
    searchUsers,
  };

  return (
    <GithubContext.Provider value={data}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;
