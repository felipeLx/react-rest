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
            {detailAllow && <h2>{props.by}</h2>}
            <p 
              className={props.isFav ? 'is-fav' : ''}
              onClick={() => setDetailAllow(!detailAllow)}
            >{props.quote}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
	        onClick={props.ordered} >{props.isAuth ? 'FAVORITE' : 'SIGN UP TO FAVORITE'}
        </button>
      </div>
    </Card>
  );
};

export default QuoteItem;
