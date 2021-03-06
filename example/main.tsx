import ReactDOM from "react-dom";
import React from "react";

import "main.css";

import { parseRoutePath, IRouteParseResult } from "@worktools/ruled-router";

import { routerRules } from "./models/router-rules";

import Container from "./pages/container";
import { setMesonModalDefaultConfigs } from "../src/configs";

const renderApp = () => {
  let routerTree = parseRoutePath(window.location.hash.slice(1), routerRules);

  ReactDOM.render(<Container router={routerTree as any} />, document.querySelector(".app"));
};

setMesonModalDefaultConfigs({
  disableBackdropClose: false,
  disableMoving: false,
  centerTitle: false,
  hideClose: false,
});

window.onload = renderApp;

window.addEventListener("hashchange", () => {
  renderApp();
});

if (import.meta.hot) {
  import.meta.hot.accept(["./pages/container"], () => {
    renderApp();
  });
}
