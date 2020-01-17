import * as actions from "./actionTypes";

export function addData(payload) {
  return { type: actions.ADD_DATA, payload };
}

export function getData() {
  return { type: actions.REQUEST_DATA };
}