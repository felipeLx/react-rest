import { put } from 'redux-saga/effects';
import axios from '../../axios-store';

import * as actions from '../actions/index';

export function* requestFavoritesSaga(action) {
    
    yield put( actions.requestFavoritesStart() );
    try{
        const response = yield axios.post( '/favorites.json?auth=' + action.token, action.favoritesData )
        //console.log( response.data );
        yield put( actions.setFavoritesSuccess( response.data.name, action.favoritesData ) );
        } catch(error)  {
                yield put( actions.setFavoritesFail( error ) );
        } 
}

export function* fetchFavoritesSaga(action) {
    yield put(actions.fetchFavoritesStart());
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        try{
            const response = yield axios.get( '/favorites.json' + queryParams );
            const fetchedFavorites = [];
                for ( let key in response.data ) {
                    fetchedFavorites.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
                yield put(actions.fetchFavoritesSuccess(fetchedFavorites));    
        } catch(error) {
            yield put(actions.fetchFavoritesFail(error));
          }
    } 