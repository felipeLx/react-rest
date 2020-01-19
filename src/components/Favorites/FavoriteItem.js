import React from 'react';

import './FavoriteItem.css';

const favorite = props => {
  const favorites = [];

  for(let favoriteName in props.favorites) {
    favorites.push({
      name: favoriteName
    });
  }

  const favoritesOutput = favorites.map(fv => {
    return <span 
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
            }}
        key={fv.name}>{fv.name}</span>;
  });

  return (
    <div>
        <p>Favorites: {favoritesOutput}</p>
    </div>
  );
};

export default favorite;
