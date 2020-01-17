import * as actionTypes from './actionTypes';

export const toggleFav = id => {
    return { type: actionTypes.TOGGLE_FAV, favoriteId: id };
};

export const setData = ( data ) => {
    return {
        type: actionTypes.SET_DATA,
        data: data
    };
};

export const fetchDataFailed = () => {
    return {
        type: actionTypes.FETCH_DATA_FAILED
    };
};

export const initData = () => {
    return {
        type: actionTypes.INIT_DATA
    };
};