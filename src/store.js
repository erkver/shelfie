import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import reducer from "./ducks/reducer";

export default createStore(reducer, applyMiddleware(promiseMiddleware()));

// npm i axios react-router-dom express bpdy-parser massive dotenv redux react-redux redux-promise-middleware