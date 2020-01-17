import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/Products/ProductItem';
import { useStore } from '../../hooks-store/store';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-store';
import Spinner from '../../components/UI/Spinner/Spinner';
import './Products.css';

const products = React.memo(props => {
  const state = useStore()[0];
  const [seeDetails, setSeeDetails] = useState(false);
  
  const prods = useSelector(state => {
    return state.burgerBuilder.ingredients;
  });

  const error = useSelector(state => {
    return state.productListBuilder.error;
  });

  const seeDetailsHandler = () => {
    setSeeDetails(true);
  };


  let productItem = error ? <p>Products can't be loaded!</p> : <Spinner />;

  if(seeDetails) {
    productItem = 
    state.products.map(prod => (
    <ProductItem
      key={prod.id}
      id={prod.id}
      title={prod.title}
      description={prod.description}
      isFav={prod.isFavorite}
    />
    ))
  } else {
    state.products.map(prod => (
      <ProductItem
        key={prod.id}
        id={prod.id}
        title={prod.title}
      />
      ))
  }

  return (
    <ul className="products-list">
      <div onClick={seeDetailsHandler}>{productItem}</div>
    </ul>
  );
});

export default withErrorHandler(products, axios);