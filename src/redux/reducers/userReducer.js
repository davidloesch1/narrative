const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "LOGIN":
      console.log("did we make it here?");
      //I;m not sure where we need to check for password but it seems like it might be right here.
      return {
        ...state,
        user: action.user.username,
      };
    default:
      return state;
  }
};

export default user;
