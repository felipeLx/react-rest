import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    data: [],
    loading: false
};

const requestApiData = (state, action) => {
    return updateObject(state,{ 
        loading: true
    });
};

const receiveApiData = (state, action) => {
    return updateObject(state, {
        data: action.data,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_API_DATA: return requestApiData(state, action);
        case actionTypes.RECEIVE_API_DATA: return receiveApiData(state, action);
        default:
            return state;           
    }
};

export default reducer;