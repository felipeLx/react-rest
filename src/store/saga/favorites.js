import { put } from 'redux-saga/effects';
import axios from '../../axios-store';

import * as actions from '../actions/index';

export function* fetchFavoritesSaga(action) {
    
    yield put( actions.fetchFavoritesStart() );
    try{
        const response = yield axios.post( '/favorites.json?auth=' + action.token, action.favoritesData )
        console.log( response.data );
        yield put( actions.fetchFavoritesSuccess( response.data.name, action.favoriteData ) );
        } catch(error)  {
                yield put( actions.fetchFavoritesFail( error ) );
        } 
}

export function* requestFavoritesSaga(action) {
    yield put(actions.requestFavoritesStart());
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        console.log(queryParams);
        try{
            const response = yield axios.get( '/favorites.json' + queryParams );
            const requestFavorites = [];
                for ( let key in response.data ) {
                    requestFavorites.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                yield put(actions.requestFavoritesSuccess(requestFavorites));    
        } catch(error) {
            yield put(actions.requestFavoritesFail(error));
          }
    } 