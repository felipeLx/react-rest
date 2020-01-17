import React from 'react';
import { connect } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';

const Favorites = React.memo(props => {
  const favoriteData = props.data.filter(p => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteData.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteData.map(prod => (
          <FavoriteItem
            key={prod.name}
            name={prod.name}
            aliases={prod.aliases[0]}
            playedBy={prod.playedBy}
          />
        ))}
      </ul>
    );
  }
  return content;
});

const mapStateToProps = (state) => ({
  data: state.data,
  })

export default connect(mapStateToProps)(Favorites);