import { call, put} from "redux-saga/effects";
// import axios from 'axios';

import * as actions from '../actions/index';

export function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(actions.receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export const fetchData = async () => {
    try {
      const response = await fetch("https://anapioficeandfire.com/api/characters/");
      const json = await response.json();
      console.log(json);
      return json;
    } catch (e) {
      console.log(e);
    }
  };