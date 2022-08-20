import React from "react";
import Welcome from "./Welcome";

function App(props) {
  if (props.user === "") {
    return <button>Login</button>;
  } else {
    return <Welcome name={props.user} />;
  }
}

export default App;
