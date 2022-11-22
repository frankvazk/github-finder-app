import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (query) => {
  const params = new URLSearchParams({
    q: query,
  });

  const res = await github.get(`/search/users?${params}`);
  if (!res.data) {
    return [];
  }

  return res.data.items;
};

export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  try {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos?${params}`),
    ]);

    if (!user.data) {
      return null;
    }

    return { user: user.data, repos: repos.data };
  } catch (error) {
    return null;
  }
};
