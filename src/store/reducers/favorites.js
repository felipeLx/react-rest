import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    favorites: [],
    loading: false
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
        case actionTypes.FETCH_FAVORITES_START: return fetchFavoritesStart( state, action );
        case actionTypes.FETCH_FAVORITES_SUCCESS: return fetchFavoritesSuccess( state, action );
        case actionTypes.FETCH_FAVORITES_FAIL: return fetchFavoritesFail( state, action );
        default: return state;
    }
};

export default reducer;