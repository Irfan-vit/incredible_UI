import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { defaultTheme, GlobalStyle } from "./utils";
import { PrimaryButton } from "./components/buttons";
import { Alerts } from "./components/alert";
import { Card } from "./components/cards";

const App = () => {
  return (
    <div>
      <Card />
      <PrimaryButton modifiers={["warning", "primaryButtonWarning"]}>
        Hello World
      </PrimaryButton>
      <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
      <Alerts />
      <GlobalStyle />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
