import { takeEvery, call, put } from "redux-saga/effects";
import axios from 'axios';

export function* dataSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (e) {
    yield put({ type: "API_ERROR", payload: e });
  }
}

export function getData() {
  return axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json()
  );
}