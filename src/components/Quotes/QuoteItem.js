import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../UI/Card/Card';
import { toggleFav } from '../../store/actions/favorites';
import './QuoteItem.css';

const QuoteItem = props => {
  const dispatch = useDispatch();
  const [detailAllow, setDetailAllow] = useState(false);

  const toggleFavHandler = () => {
    dispatch(toggleFav, props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="quote-item">
          <div onClick={() => setDetailAllow(!detailAllow)}>
            {detailAllow && <h2>{props.by}</h2>}
            <p>{props.quote}</p>
          </div>
          <div className={props.isFav ? 'is-fav' : ''}>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
        </div>
      </div>
    </Card>
  );
};

export default QuoteItem;