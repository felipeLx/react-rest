// import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import Aux from '../../hoc/Aux/Aux';
// import Burger from '../../components/Burger/Burger';
// import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import Modal from '../../components/UI/Modal/Modal';
// import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
// import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import * as actions from '../../store/actions/index';
// import axios from '../../axios-orders';

// const Quotes = props => {
//     // const productList = useContext(ProductsContext).products;
//     const state = useStore()[0];
   
//     return (
//       <ul className="products-list">
//         {state.products.map(prod => (
//           <ProductItem
//             key={prod.id}
//             id={prod.id}
//             title={prod.title}
//             description={prod.description}
//             isFav={prod.isFavorite}
//           />
//         ))}
//       </ul>
//     );
//   };
  
//   export default Quotes;