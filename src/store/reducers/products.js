import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    data: null,
    error: false,
    building: false
};

const setData = (state, action) => {
    return updateObject( state, {
        data: {
            name: action.data.name,
            aliases: action.data.aliases[0],
            culture: action.data.culture,
            playedBy: action.data.playedBy
        },
        error: false,
        building: false
    } );
};

const fetchDataFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_DATA: return setData(state, action);    
        case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state, action);
        default: return state;
    }
};

export default reducer;

