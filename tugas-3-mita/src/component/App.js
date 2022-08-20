import React from "react";
import Welcome from "./Welcome";

function App(props) {
  if (props.user === "") {
    return <button>Login kembali</button>;
  } else {
    return <Welcome name={props.user} />;
  }
}

export default App;
