import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { connect } from "react-redux";

import ProductItem from '../../components/Products/ProductItem';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-store';
import * as actions from '../../store/actions/index';
import './Products.css';

const products = React.memo(props => {
  const isAuthenticated = useSelector(state => {
    return state.auth.token !== null;
  });
 
  useEffect(() => {
    actions.setData();
  }, []);

  let dataItems = [];

  if(isAuthenticated) {
    dataItems = (
      <Aux>
        <ProductItem
          key={props.data.id}
          id={props.data.id}
          title={props.data.title}
          description={props.data.description}
          isFav={props.data.isFavorite}
        />
      </Aux>
    );
  } else {
    dataItems = 
    <Aux>
      <ProductItem
        key={props.data.id}
        id={props.data.id}
        title={props.data.title}
      />
    </Aux>
  }

  return (
    <ul className="products-list">
      <div>{dataItems}</div>
    </ul>
  );
});

const mapStateToProps = state => {
  return { 
    data: state.data 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch(actions.setData()),
    onInit: () => dispatch(actions.requestInit()),
    onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(products, axios));