import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';

export function* initProductsSaga(action) {
    try{
        const response = yield axios.get( 'https://anapioficeandfire.com/api/characters/' )
        yield put(actions.setProducts(response.data));
    } catch(error) {
        yield put(actions.fetchProductsFailed());
    }
}