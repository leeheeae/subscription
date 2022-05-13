import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as testAPI from '../lib/api';

//
const [TEST_ACTION, TEST_ACTION_SUCCESS, TEST_ACTION_FAILURE] =
  createRequestActionTypes('getDetail/TEST_ACTION');

export const testAction = createAction(TEST_ACTION);

const getDetailTestActionSaga = createRequestSaga(TEST_ACTION, testAPI.test);

export function* getDetailSaga() {
  yield takeLatest(TEST_ACTION, getDetailTestActionSaga);
}

const initialState = {
  test: null,
  error: null,
};

const getDetail = handleActions(
  {
    [TEST_ACTION_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      test: data,
    }),
    [TEST_ACTION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default getDetail;
