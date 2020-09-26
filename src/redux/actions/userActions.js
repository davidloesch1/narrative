import * as actions from "./actionTypes";

export const logout = () => ({
  type: actions.LOGOUT,
});

export const login = user => {
    console.log("made it to useractions")
  return {
    type: actions.LOGIN,
    user
  };
};
