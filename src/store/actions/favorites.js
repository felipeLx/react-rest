import * as actionTypes from './actionTypes';

export const TOGGLE_FAV = 'TOGGLE_FAV';

export const toggleFav = id => {
    return { type: TOGGLE_FAV, quoteId: id };
};

export const requestFavoritesSuccess = ( id, favoriteData ) => {
    return {
        type: actionTypes.REQUEST_FAVORITE_SUCCESS,
        favoriteId: id,
        favoriteData: favoriteData
    };
};

export const requestFavoritesFail = ( error ) => {
    return {
        type: actionTypes.REQUEST_FAVORITE_FAIL,
        error: error
    };
}

export const requestFavoritesStart = () => {
    return {
        type: actionTypes.REQUEST_FAVORITE_START
    };
};

export const requestFavorites = ( favoriteData, token ) => {
    return {
        type: actionTypes.REQUEST_FAVORITE,
        favoriteData: favoriteData,
        token: token
    }
};

export const requestInit = () => {
    return {
        type: actionTypes.REQUEST_INIT
    };
};

export const fetchFavoritesSuccess = ( favorites ) => {
    return {
        type: actionTypes.FETCH_FAVORITE_SUCCESS,
        favorites: favorites
    };
};

export const fetchFavoritesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FAVORITE_FAIL,
        error: error
    };
};

export const fetchFavoritesStart = () => {
    return {
        type: actionTypes.FETCH_FAVORITE_START
    };
};

export const fetchFavorites = (token, userId) => {
    return {
        type: actionTypes.FETCH_FAVORITE,
        token: token,
        userId: userId
    }
};