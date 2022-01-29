import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const App = () => {
  return (
    <div>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
