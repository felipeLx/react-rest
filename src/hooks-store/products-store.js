import { initStore } from './store';

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (currState, productId) => {
            const prodIndex = currState.products.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !currState.products[prodIndex].isFavorite;
              const updatedProducts = [...currState.products];
              updatedProducts[prodIndex] = {
                ...currState.products[prodIndex],
                isFavorite: newFavStatus
              };
            return { products: updatedProducts };
        }
    };

    initStore(actions, {
        quotes: [{
            id: null,
            quote: null,
            by: null,
            isFavorite: false
          }
        ]
    });
};

export default configureStore;