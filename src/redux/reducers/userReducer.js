const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      return null;
    case "LOGIN":
      return action.user.username;
    default:
      return state;
  }
};

export default user;
