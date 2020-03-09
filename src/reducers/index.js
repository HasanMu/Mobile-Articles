const initState = {
  count: 0,
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DELETE':
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      }
      break;
    default:
      return state;
  }
};

export default rootReducer;
