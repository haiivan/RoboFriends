import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import "tachyons";
//REDUX
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { requestRobots, searchRobots } from "./reducers";
import { createLogger } from "redux-logger";
//Async redux
//Checks for actions that return a function
import thunkMiddleware from "redux-thunk";

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
