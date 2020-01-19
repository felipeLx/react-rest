import React, { useState } from 'react';

export const ProductsContext = React.createContext({
    favorites: [],
    toggleFav: (id) => {}
});

export default props => {
    const [favoritesList, setFavoritesList] = useState([]);
    
    const toggleFavorite = favoriteId => {
      setFavoritesList(currentFavoriteList => {
            const favoriteIndex = currentFavoriteList.findIndex(
                p => p.id === favoriteId
              );
              const newFavStatus = !currentFavoriteList[favoriteIndex].isFavorite;
              const updatedFavorites = [...currentFavoriteList];
              updatedFavorites[favoriteIndex] = {
                ...currentFavoriteList[favoriteIndex],
                isFavorite: newFavStatus
              };
            return updatedFavorites;
        });
    };

    return (
        <ProductsContext.Provider value={{favorites: favoritesList, toggleFav: toggleFavorite}}>
            {props.children}
        </ProductsContext.Provider>
        );
};