import { createContext, useReducer } from "react";
import gitHubReducer from "./githubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const data = {
    ...state,
    dispatch,
  };

  return (
    <GithubContext.Provider value={data}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;
