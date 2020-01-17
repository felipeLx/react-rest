import React, { useState } from 'react';

import ProductItem from '../../components/Products/ProductItem';
import { useStore } from '../../hooks-store/store';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-store';
import './Products.css';

const products = React.memo(props => {
  const state = useStore()[0];
  const [seeDetails, setSeeDetails] = useState(true);
  
  let productItem = [];

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
    productItem = 
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
      <div>{productItem}</div>
    </ul>
  );
});

export default withErrorHandler(products, axios);