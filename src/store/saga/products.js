import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* initDataSaga(action) {
    try{
        const response = yield axios.get( 'https://anapioficeandfire.com/api/characters/' )
        console.log('initDataSaga ' + response);
        yield put(actions.setData(response.data));
    } catch(error) {
        yield put(actions.fetchDataFailed());
    }
}