import {combineReducers} from 'redux';
import sourcesBBC from './sourcesBBC';
import articlesBBC from './articlesBBC';

const rootReducers = combineReducers({
  sourcesBBC,
  articlesBBC,
});

export default rootReducers;
