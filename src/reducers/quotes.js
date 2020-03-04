export default function manageQuote(state = [], action) {
  let index;
  let quote;

  switch (action.type) {

    case 'ADD_QUOTE':
      return [...state,action.quote]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId);

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[index];
      let newState = state;
      newState[index] = quote.votes += 1
      state = newState;
      return state;
      
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
