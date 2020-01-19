import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import QuoteItem from '../../components/Quotes/QuoteItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-store';
import * as actions from '../../store/actions/index';
import './Quotes.css';

const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

const Quotes = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);
  const [isAllowToFavorite, setIsAllowToFavorite] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const favoriteHandler = () => {
    if(props.isAuthenticated) {
        setIsAllowToFavorite(true);
    } else {
        props.onSetAuthRedirectPath('/favorites'); 
        props.history.push('/auth');
    }
}

  let content = <Spinner />;
  
  if(data.length > 0) {
    content = (
      <ul className="quotes-list">
        {data.map(d => (
        <Aux key={d.id}>
          <QuoteItem
            key={d.id}
            id={d.id}
            quote={d.content.rendered}
            by={d.title.rendered}
            isFav={d.isFavorite}
            isAuth={props.isAuthenticated}
            ordered={favoriteHandler}
          />
        </Aux>
        ))}
      </ul>
    );
  }
    
  return content;
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
