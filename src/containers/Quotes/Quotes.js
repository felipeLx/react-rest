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
 
  useEffect(() => {
    setIsLoading(true);
    console.log(isLoading);
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
  
  let dataItems = (
    data.quotes.map((d) => 
      <Aux>
        <QuoteItem
          key={d.id}
          id={d.id}
          quote={d.content.rendered}
          isFav={props.data.isFavorite}
        />
      </Aux>
    )
  );

  const fullQuoteHandler = () => {
    dataItems = (
      data.quotes.map((d) => 
      <Aux>
        <QuoteItem
          key={data.quotes.id}
          id={data.quotes.id}
          quote={data.quotes.content.rendered}
          by={data.quotes.title.rendered}
          isFav={props.data.isFavorite}
        />
      </Aux>
      )
    )};
  
  return (
    <ul className="products-list">
      <div onClick={fullQuoteHandler}>{dataItems}</div>
    </ul>
  );
});

export default (withErrorHandler(quotes, axios));