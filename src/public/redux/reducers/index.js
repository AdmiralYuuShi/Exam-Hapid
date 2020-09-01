import {combineReducers} from 'redux';

import fetchRandomCode from './fetch_random_code';
import sendRandomCode from './send_random_code';
import sendImageList from './send_image_list';

const rootReducer = combineReducers({
  fetchRandomCode,
  sendRandomCode,
  sendImageList,
});

export default rootReducer;