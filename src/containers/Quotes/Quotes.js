import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

import QuoteItem from '../../components/Quotes/QuoteItem';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-store';
import './Quotes.css';

const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

const Quotes = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError,setIsError] = useState(false);
 
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
            isFav={props.isFavorite}
          />
        </Aux>
        ))}
      </ul>
    );
  }
    
  return content;
};

export default Quotes;