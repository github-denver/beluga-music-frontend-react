import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../../lib/api/music'

// 액션 유형을 정의합니다.
const [MUSIC_READ, MUSIC_READ_SUCCESS, MUSIC_READ_FAILURE] = createRequestActionTypes('music/MUSIC_READ')

// 액션 생성 함수를 정의합니다.
export const musicRead = createAction(MUSIC_READ, ({ category, number }) => ({ category, number }))

const readSaga = createRequestSaga(MUSIC_READ, api.read)

// 제너레이터 함수(saga)를 정의합니다.
export function* musicReadSaga() {
  yield takeLatest(MUSIC_READ, readSaga)
}

// 초기 상태를 정의합니다.
const initialState = {
  read: null,
  error: null
}

// 리듀서 함수를 정의합니다.
export default handleActions(
  {
    [MUSIC_READ_SUCCESS]: (state, { payload: read }) => {
      return {
        ...state,
        read
      }
    },
    [MUSIC_READ_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    })
  },
  initialState
)
