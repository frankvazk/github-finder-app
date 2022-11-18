import { createContext, useState } from "react";

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await res.json();
    setLoading(false);
    setUsers(data);
    console.log(data);
  };

  const data = {
    users,
    loading,
    fetchUsers,
  };

  return (
    <GithubContext.Provider value={data}>{children}</GithubContext.Provider>
  );
};

export default GithubContext;