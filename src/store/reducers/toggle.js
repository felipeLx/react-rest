import { TOGGLE_FAV } from '../actions/favorites';

const initialState = {
  quotes: [
    {
      id: '',
      quote: '',
      by: '',
      isFavorite: false
    }
  ]
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const quoteIndex = state.quotes.findIndex(
        p => p.id === action.quoteId
      );
      const newFavStatus = !state.quotes[quoteIndex].isFavorite;
      const updatedQuotes = [...state.quotes];
      updatedQuotes[quoteIndex] = {
        ...state.products[quoteIndex],
        isFavorite: newFavStatus
      };
      return {
        ...state,
        quotes: updatedQuotes
      };
    default:
      return state;
  }
};

export default quoteReducer;