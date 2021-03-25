import { SET_ALERT, REMOVE_ALERT } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
