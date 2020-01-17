import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/Products/ProductItem';
import { useStore } from '../../hooks-store/store';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import './Products.css';

const Products = props => {
  const state = useStore()[0];
  const [viewFavorites, setViewFavorites] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => {
    return state.auth.token !== null;
  });
  const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

  const logginHandler = () => {
    if(!isAuthenticated) {
      onSetAuthRedirectPath('/auth'); 
      props.history.push('/auth');
    } else {
        setViewFavorites(true);
        props.history.push('/favorites');
    }
}
  return (
    <ul className="products-list">
      {state.products.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;