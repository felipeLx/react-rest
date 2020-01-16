import * as actionTypes from './actionTypes';

export const TOGGLE_FAV = () => {
    return {
        type: actionTypes.TOGGLE_FAV
    };   
};

export const toggleFav = id => {
    return { type: actionTypes.TOGGLE_FAV, productId: id };
};