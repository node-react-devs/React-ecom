import { combineReducers } from "redux";
import { TestReducer } from "./test/test.reducer";

const reducer = combineReducers({
  test: TestReducer,
});

export default reducer;
