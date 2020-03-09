import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line prettier/prettier
import { createLogger } from 'redux-logger';
import rootReducers from './reducers';

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(rootReducers, middleware);

export default store;
