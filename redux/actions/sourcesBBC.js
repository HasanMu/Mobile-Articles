import {
  FETCH_SOURCES,
  FETCH_SOURCES_SUCCESS,
  FETCH_SOURCES_ERROR,
  CHANGE_SOURCES,
} from './types';
import {fetch} from 'cross-fetch';
import {getArticles} from './articlesBBC';

export const fetchSources = () => ({
  type: FETCH_SOURCES,
});

export const fetchSourcesSuccess = payload => ({
  type: FETCH_SOURCES_SUCCESS,
  payload,
});

export const fetchSourcesError = error => ({
  type: FETCH_SOURCES_ERROR,
  error,
});

// function get api with fetch Async/Await
export const callApi = async URL => {
  try {
    const res = await fetch(URL);
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }

    const data = await res.json();

    return data;
  } catch (err) {
    return {error: err.message};
  }
};

// function for call init

export const getSources = () => dispatch => {
  dispatch(fetchSources());
  // call async/await callApi
  callApi(
    'http://newsapi.org/v1/sources?apiKey=b6938484c7134bf98d2c3394934465f1',
  ).then(data => {
    if (!data.error) {
      dispatch(fetchSourcesSuccess(data.sources));
      // set picker default value
      dispatch(changeSources(data.sources[0].id));
    } else {
      dispatch(fetchSourcesError(data.error));
    }
  });
};

// function for change Picker

export const changeSources = source => dispatch => {
  dispatch({
    type: CHANGE_SOURCES,
    source,
  });
  // trigger get Articles
  dispatch(getArticles());
};
