import { TestActionTypes } from "./test.type";

const { TEST_STATE_REQUEST, TEST_STATE_SUCCESS, TEST_STATE_REJECTED } =
  TestActionTypes;

export const TestReducer = (state = {}, action) => {
  switch (action.type) {
    case TEST_STATE_REQUEST:
      return { ...state, request: action.payload };
    case TEST_STATE_SUCCESS:
      return { ...state, success: action.payload };
    case TEST_STATE_REJECTED:
      return { ...state, rejected: action.payload };
    default:
      return state;
  }
};
