import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: [],
    error: false,
    sort: false,
    filter: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

// const sortData = ( state, action ) => {
//     const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
//     const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
//     const updatedState = {
//         ingredients: updatedIngredients,
//         totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
//         building: true
//     }
//     return updateObject( state, updatedState );
// };

// const filterData = (state, action) => {
//     const updatedIng = { [action.dataName]: state.data[action.dataName].filter() }
//     const updatedData = updateObject( state.data, updatedIng );
//     const updatedSt = {
//         data: updatedData,
//         totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
//         building: true
//     }
//     return updateObject( state, updatedSt );
// };

const setData = (state, action) => {
    return updateObject( state, {data: [action.data]} );
};

const fetchDataFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SORT_DATA: return sortData( state, action );
        case actionTypes.FILTER_DATA: return filterData(state, action);
        case actionTypes.SET_DATA: return setData(state, action);    
        case actionTypes.FETCH_DATA_FAILED: return fetchDataFailed(state, action);
        default: return state;
    }
};

export default reducer;