import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import FavoriteItem from '../../components/Favorites/FavoriteItem';
import axios from '../../axios-store';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

const favorites = React.memo(props => {
  const {onFetchFavorites,token, userId} = props;

  useEffect(() =>  {
    onFetchFavorites(token, userId);
  }, [onFetchFavorites, token, userId]);

  let favorites = <Spinner />;
  if ( !props.loading ) {
    favorites = props.favorites.map( favorite => (
        <FavoriteItem
            key={favorite.id}
            favorites={favorite.favorites}
         />
    ) )
}
  return (
    <div>{favorites}</div>
  );
});

const mapStateToProps = state => {
  return {
      favorites: state.favorite.favorites,
      loading: state.favorite.loading,
      token: state.auth.token,
      userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onFetchFavorites: (token, userId) => dispatch( actions.fetchFavorites(token, userId) )
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( favorites, axios ) );