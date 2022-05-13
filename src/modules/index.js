import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import getDetail, { getDetailSaga } from './getDetail';

const rootReducer = combineReducers({
  loading,
  getDetail,
});

export function* rootSaga() {
  yield all([getDetailSaga()]);
}

export default rootReducer;
