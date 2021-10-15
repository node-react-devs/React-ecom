import { TestActionTypes } from "./test.type";

export const testRequest = () => {
  return {
    type: TestActionTypes.TEST_STATE_REQUEST,
    payload: "this is request",
  };
};
export const testSuccess = () => {
  return {
    type: TestActionTypes.TEST_STATE_SUCCESS,
    payload: "this is success",
  };
};
export const testRejected = () => {
  return {
    type: TestActionTypes.TEST_STATE_REJECTED,
    payload: "this is rejected",
  };
};
