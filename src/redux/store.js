import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";
import logger from "redux-logger";
const middleware = [thunk];

const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);

export default store;
