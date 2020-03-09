import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from './types';
import {fetch} from 'cross-fetch';

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

export const fetchArticlesSuccess = payload => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload,
});

export const fetchArticlesError = error => ({
  type: FETCH_ARTICLES_ERROR,
  error,
});

// function for call init

// export const getArticles = () => (dispatch, getState) => {
//   //   const {sourceBBC} = getState();
//   //   const sourceBBC = 'abc-news-au';

//   //   if (!sourceBBC.source) {
//   //     return;
//   //   }

//   dispatch(fetchArticles());
//   // call async/await callApi

//   callApi(URL).then(data => {
//     if (!data.error) {
//       dispatch(fetchArticlesSuccess(data.articles));
//       // set picker default value
//     } else {
//       dispatch(fetchArticlesError(data.error));
//     }
//   });
// };

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

export const getArticles = () => (dispatch, getState) => {
  const sourcesBBC = getState().sourcesBBC;

  if (!sourcesBBC.source) {
  }

  const url =
    'http://newsapi.org/v1/articles?source=' +
    sourcesBBC.source +
    '&apiKey=b6938484c7134bf98d2c3394934465f1';

  dispatch(fetchArticles());

  // call async/await callApi
  callApi(url).then(data => {
    if (!data.error) {
      dispatch(fetchArticlesSuccess(data.articles));
    } else {
      dispatch(fetchArticlesError(data.error));
    }
  });
};
