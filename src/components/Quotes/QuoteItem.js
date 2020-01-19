import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card/Card';
// import { ProductsContext } from '../../context/products-context';
// import { useStore } from '../../hooks-store/store';
import { toggleFav } from '../../store/actions/favorites';
import './QuoteItem.css';

const QuoteItem = props => {
  // const dispatch =  useStore()[1];
  const dispatch = useDispatch();
  // const toggleFav = useContext(ProductsContext).toggleFav;
  const [detailAllow, setDetailAllow] = useState(false);

  const toggleFavHandler = () => {
    // toggleFav(props.id); 
    dispatch(toggleFav, props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="quote-item">
          <div onClick={() => setDetailAllow(!detailAllow)}>
            {detailAllow && <h2 className={props.isFav ? 'is-fav' : ''}>{props.by}</h2>}
            <p>{props.quote}</p>
          </div>
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

export default QuoteItem;