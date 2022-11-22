const gitHubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING": {
      return {
        ...state,
        loading: true,
        user: {},
      };
    }
    case "CLEAR_SEARCH":
      return {
        ...state,
        users: [],
      };
    case "SET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "NOT_FOUND":
      return {
        ...state,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export default gitHubReducer;
