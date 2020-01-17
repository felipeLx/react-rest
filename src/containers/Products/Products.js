import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/Products/ProductItem';
import * as actions from '../../store/actions/index';
import './Products.css';

const Products = props => {
  const state = actions.setProducts;
 
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          name={prod.name}
          aliases={prod.aliases}
          playedBy={prod.playedBy}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;