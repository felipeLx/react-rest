import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import QuoteItem from '../../components/Quotes/QuoteItem';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-store';
import './Quotes.css';

const url = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

const quotes = React.memo(props => {
  const [data, setData] = useState({quotes: []});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [detailAllow, setDetailAllow] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    console.log("isLoading: " + isLoading);
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [isLoading]);

  
    let shortDataItem = 
    data.quotes.map((d) => 
      <Aux onClick={() => setDetailAllow(true)}>
        <QuoteItem
          key={d.id}
          id={d.id}
          quote={d.content.rendered}
          isFav={props.data.isFavorite}
        />
      </Aux>
    );

    let bigDataItem = 
      data.quotes.map((d) => 
      <Aux onClick={() => setDetailAllow(false)}>
        <QuoteItem
          key={d.quotes.id}
          id={d.quotes.id}
          quote={d.quotes.content.rendered}
          by={d.quotes.title.rendered}
          isFav={props.data.isFavorite}
        />
      </Aux>
      )
  
  return (
    <ul className="products-list">
      {!detailAllow ? {shortDataItem} : {bigDataItem}}
    </ul>
  );
});

export default (quotes);