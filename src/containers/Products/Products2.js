// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import Aux from '../../hoc/Aux/Aux';
// import ProductItem from '../../components/Products/ProductItem';
// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import * as actions from '../../store/actions/index';
// import axios from '../../axios-store';

// const Products2 = React.memo(props => {

//     const dispatch = useDispatch();

//     const products = useSelector(state => {
//         return state.products //state.burgerBuilder.ingredients;
//     });

//     const error = useSelector(state => {
//         return state.products.error;
//     });

//     const isAuthenticated = useSelector(state => {
//         return state.auth.token !== null;
//     });

//     const onInitProducts = useCallback(() => dispatch(actions.initProducts()), [dispatch]);
//     const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

//         let orderSummary = null;
//         let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

//         return (
//             <ul className="products-list">
//               {state.products.map(prod => (
//                 <ProductItem
//                   key={prod.name}
//                   name={prod.name}
//                   aliases={prod.aliases}
//                   playedBy={prod.playedBy}
//                   isFav={prod.isFavorite}
//                 />
//               ))}
//             </ul>
//           );
// });


// export default withErrorHandler( Products2, axios );