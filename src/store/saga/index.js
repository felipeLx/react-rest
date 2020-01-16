import { takeEvery, all} from 'redux-saga/effects';

import * as actionType from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initProductsSaga } from './products';  

export function* watchAuth() {
    yield all([
        takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionType.AUTH_USER, authUserSaga),
        takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga)  
    ]);
}

export function* watchProducts() {
    yield takeEvery(actionType.SET_PRODUCTS, initProductsSaga);
}