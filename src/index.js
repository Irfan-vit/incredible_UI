import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { defaultTheme, GlobalStyle } from "./utils";
import { PrimaryButton } from "./components/buttons";

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers={["warning", "primaryButtonWarning"]}>
        Hello World
      </PrimaryButton>
      <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
