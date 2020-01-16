import { initStore } from './store';

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (currState, productId) => {
            const prodIndex = currState.products.findIndex(
                p => p.name === productId
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
        products: {
            name: '',
            aliases: [],
            playedBy: [],
            isFavorite: false
          }
    });
};

export default configureStore;