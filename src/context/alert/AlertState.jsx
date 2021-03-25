import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const intialState = null;

  const [state, dispatch] = useReducer(AlertReducer, intialState);

  const showAlert = (msg, type) => {
    msg === null
      ? dispatch({ type: REMOVE_ALERT })
      : dispatch({ type: SET_ALERT, payload: { msg, type } });
  };

  return (
    <AlertContext.Provider value={{ alert: state, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
