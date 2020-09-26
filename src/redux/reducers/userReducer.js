const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      console.log("did we make it here?", action);

      return null;
    case "LOGIN":
      return action.user.username;
    default:
      return state;
  }
};

export default user;
