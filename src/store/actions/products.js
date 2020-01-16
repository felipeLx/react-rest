import * as actionTypes from './actionTypes';

export const TOGGLE_FAV = () => {
    return {
        type: actionTypes.TOGGLE_FAV
    };   
};

export const toggleFav = name => {
    return { type: actionTypes.TOGGLE_FAV, productId: name };
};

export const setProducts = ( products ) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    };
};

export const fetchProductsFailed = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED
    };
};