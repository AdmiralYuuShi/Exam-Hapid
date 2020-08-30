import {combineReducers} from 'redux';

import fetchRandomCode from './fetch_random_code';
import sendRandomCode from './send_random_code';

const rootReducer = combineReducers({
  fetchRandomCode,
  sendRandomCode,
});

export default rootReducer;