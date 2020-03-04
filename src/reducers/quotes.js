export default function manageQuote(state = [], action) {
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return { quotes: state.concat(action.quote) }

    case 'REMOVE_QUOTE':
      index = state.findIndex(quote=> quote.id === action.id)
      return {
        ...state,
        quotes: [...state.slice(0, index), ...state.slice(index + 1)]
      };

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      return [
        ...state.slice(0, index),
        {...quote, votes: quote.votes += 1 },
        ...state.slice(index + 1)
      ];
      
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          {...quote, votes: quote.votes -= 1 },
          ...state.slice(index + 1)
        ];
      } else {
        return state;
      }

    default:
      return state;
  }
}
