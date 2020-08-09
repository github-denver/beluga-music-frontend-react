import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '../lib/api/playlist'

// 액션 유형을 정의합니다.
const [PLAYLIST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE] = createRequestActionTypes('playlist/PLAYLIST')

// 액션 생성 함수를 정의합니다.
export const playlist = createAction(PLAYLIST, ({ category, number }) => ({ category, number }))

// const getPlaylistSaga = createRequestSaga(PLAYLIST, api.playlist)

// 제너레이터 함수(saga)를 정의합니다.
export function* playlistSaga() {
  // yield takeLatest(PLAYLIST, getPlaylistSaga)
  yield takeLatest(PLAYLIST, createRequestSaga(PLAYLIST, api.playlist))
}

// 초기 상태를 정의합니다.
const initialState = {
  playlist: null,
  error: null
}

// 리듀서 함수를 정의합니다.
export default handleActions(
  {
    [PLAYLIST_SUCCESS]: (state, { payload: playlist }) => {
      return {
        ...state,
        playlist
      }
    },
    [PLAYLIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error
    })
  },
  initialState
)
