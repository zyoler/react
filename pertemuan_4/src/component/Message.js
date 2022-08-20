import React, { Component } from "react";

export class Message extends Component {
  // shortcut : rconst
  constructor() {
    super();

    this.state = {
      message: "Belum dipencet",
    };
  }

  ubahText() {
    this.setState({
        message: "Udah dipencet",
    });
  }

  render() {
    return (
      <div>
        <hr />
        <h1>{this.state.message}</h1>
        <button onClick={() => this.ubahText()}>Pencet aku!</button>
        {/* Di Bind supaya tidak langsung dipanggil */}
      </div>
    );
  }
}

export default Message;
