import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as testAPI from '../lib/api';

//
const [APT_DETAIL, APT_DETAIL_SUCCESS, APT_DETAIL_FAILURE] =
  createRequestActionTypes('getDetail/APT_DETAIL');

export const testAction = createAction(APT_DETAIL, (data) => data);

const getDetailTestActionSaga = createRequestSaga(APT_DETAIL, testAPI.test);

export function* getDetailSaga() {
  yield takeLatest(APT_DETAIL, getDetailTestActionSaga);
}

const initialState = {
  today: {
    APTDetail: null,
  },
  error: null,
};

const getDetail = handleActions(
  {
    [APT_DETAIL_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      today: {
        ...state.today,
        APTDetail: data,
      },
    }),
    [APT_DETAIL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default getDetail;
