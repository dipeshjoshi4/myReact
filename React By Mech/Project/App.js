
import React from 'react';

import { ReactDOM } from 'react-dom';

const heading = React.createElement(
  "div",
  { id: "Parent" },

  [
    React.createElement("div",{ id: "child" },
    React.createElement("h1", {}, "Hello World!!"),
    React.createElement("div",{ id: "child" },
    React.createElement("h1", {}, "Hello World second!!"))
  )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

