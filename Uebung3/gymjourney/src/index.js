import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import "./styles/index.css";
import App from "./App";
import rootReducer from "./reducer/index.js";

// Chrome Extension für Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux Store - Gesamtspeicher für die ganze App
// thunk middleware für Asynchronität für Anfragen und Es werden bei Action Creators Funktionen anstatt von Actions übergeben
const store = createStore(
  rootReducer,
  compose(composeEnhancers(applyMiddleware(thunk, logger)))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
