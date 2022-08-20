// shortcut : rce untuk membuat class\

import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <h3>
          Welcome {this.props.name} umurnya {this.props.age}
        </h3>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
