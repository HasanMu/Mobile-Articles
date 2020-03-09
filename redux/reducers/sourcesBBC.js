import {
  FETCH_SOURCES,
  FETCH_SOURCES_SUCCESS,
  FETCH_SOURCES_ERROR,
  CHANGE_SOURCES,
} from '../actions/types';

const initialState = {
  loading: false,
  source: null,
  data: [],
  error: null,
};

const sourcesBBC = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SOURCES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_SOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    case FETCH_SOURCES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: [],
      };
    case CHANGE_SOURCES:
      return {
        ...state,
        source: action.source,
      };
    default:
      return state;
  }
};

export default sourcesBBC;
