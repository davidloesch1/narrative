import * as actions from "./actionTypes";

export const logout = () => ({
  type: actions.LOGOUT,
});

export const login = user => {
  return {
    type: actions.LOGIN,
    user
  };
};
