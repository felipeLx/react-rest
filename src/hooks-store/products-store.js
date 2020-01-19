import { initStore } from './store';

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (currState, quoteId) => {
            const quoteIndex = currState.quotes.findIndex(
                q => q.id === quoteId
              );
              const newFavStatus = !currState.quotes[quoteIndex].isFavorite;
              const updatedQuotes = [...currState.quotes];
              updatedQuotes[quoteIndex] = {
                ...currState.quotes[quoteIndex],
                isFavorite: newFavStatus
              };
            return { quotes: updatedQuotes };
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