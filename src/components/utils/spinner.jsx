import React from "react";
import spinner from "./spinner.gif";

function Spinner(props) {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default Spinner;
