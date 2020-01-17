import { takeEvery, all, takeLatest} from 'redux-saga/effects';

import * as actionType from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initDataSaga } from './products'; 
import { fetchFavoritesSaga, requestFavoritesSaga } from './favorites'; 

export function* watchAuth() {
    yield all([
        takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga),
        takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionType.AUTH_USER, authUserSaga),
        takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga)  
    ]);
}

export function* watchFavorites() {
    yield takeLatest(actionType.REQUEST_FAVORITE, requestFavoritesSaga);
    yield takeEvery(actionType.FETCH_FAVORITE, fetchFavoritesSaga);
    
}

export function* watchData() {
    yield takeEvery(actionType.SET_DATA, initDataSaga);
}