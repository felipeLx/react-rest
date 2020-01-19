import React from 'react';
import { dispatch } from 'react-redux';

import Card from '../UI/Card/Card';
// import { ProductsContext } from '../../context/products-context';
import { useStore } from '../../hooks-store/store';
import './ProductItem.css';

const ProductItem = props => {
  const dispatch =  useStore()[1];

  const toggleFavHandler = () => {
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.by}</h2>
        <p>{props.quotes}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;