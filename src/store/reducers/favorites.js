import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    favorites: [],
    loading: false,
    requested: false
};

const requestInit = ( state, action ) => {
    return updateObject( state, { requested: false } );
};

const requestFavoritesStart = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const requestFavoritesSuccess = ( state, action ) => {
    const newFavorite = updateObject( action.favoriteData, { id: action.favoriteId } );
    return updateObject( state, {
        loading: false,
        requested: true,
        favorites: state.favorites.concat( newFavorite )
    } );
};

const requestFavoritesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const fetchFavoritesStart = ( state, action ) => {
    return updateObject( state, { loading: true } );
};

const fetchFavoritesSuccess = ( state, action ) => {
    return updateObject( state, {
        favorites: action.favorites,
        loading: false
    } );
};

const fetchFavoritesFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.REQUEST_INIT: return requestInit( state, action );
        case actionTypes.REQUEST_FAVORITES_START: return requestFavoritesStart( state, action );
        case actionTypes.REQUEST_FAVORITES_SUCCESS: return requestFavoritesSuccess( state, action )
        case actionTypes.REQUEST_FAVORITES_FAIL: return requestFavoritesFail( state, action );
        case actionTypes.FETCH_FAVORITES_START: return fetchFavoritesStart( state, action );
        case actionTypes.FETCH_FAVORITES_SUCCESS: return fetchFavoritesSuccess( state, action );
        case actionTypes.FETCH_FAVORITES_FAIL: return fetchFavoritesFail( state, action );
        default: return state;
    }
};

export default reducer;