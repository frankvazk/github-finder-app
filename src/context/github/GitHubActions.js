const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (query) => {
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
    return [];
  } else {
    return data.items;
  }
};

export const getUser = async (login) => {
  const res = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (res.status === 404) {
    return null;
  } else {
    const data = await res.json();
    return data;
  }
};

export const getUserRepos = async (login) => {
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
    return [];
  } else {
    return data;
  }
};
