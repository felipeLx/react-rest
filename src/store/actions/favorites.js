import * as actionTypes from './actionTypes';

export const requestFavoriteSuccess = ( id, favoriteData ) => {
    return {
        type: actionTypes.REQUEST_FAVORITE_SUCCESS,
        favoriteId: id,
        favoriteData: favoriteData
    };
};

export const requestFavoriteFail = ( error ) => {
    return {
        type: actionTypes.REQUEST_FAVORITE_FAIL,
        error: error
    };
}

export const requestFavoriteStart = () => {
    return {
        type: actionTypes.REQUEST_FAVORITE_START
    };
};

export const purchaseBurger = ( favoriteData, token ) => {
    return {
        type: actionTypes.REQUEST_FAVORITE,
        favoriteData: favoriteData,
        token: token
    }
};

export const favoriteInit = () => {
    return {
        type: actionTypes.FAVORITE_INIT
    };
};

export const fetchFavoritesSuccess = ( favorites ) => {
    return {
        type: actionTypes.FETCH_FAVORITES_SUCCESS,
        favorites: favorites
    };
};

export const fetchFavoritesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_FAVORITES_FAIL,
        error: error
    };
};

export const fetchFavoritesStart = () => {
    return {
        type: actionTypes.FETCH_FAVORITES_START
    };
};

export const fetchFavorites = (token, userId) => {
    return {
        type: actionTypes.FETCH_FAVORITES,
        token: token,
        userId: userId
    }
};