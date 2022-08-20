// shortcut: rfce untuk membuat function

import React from "react";

// Ini make javascript biasa
// function Hello() {
//   return React.createElement('div',null,
//             React.createElement('h1',null,'Ini pake javascript'))
// }

// ini make jsx
const Hello = () => {
  const nama = "hello world";

  return (
    <div className="inidiv">
      <h1>Ini pake jsx {nama}</h1>
    </div>
  );
}

export default Hello;