import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
// import authorization, { authorizationSaga } from './authorization'
// import user, { userSaga } from './user'
import playlist, { playlistSaga } from './playlist'

const rootReducer = combineReducers({ loading, playlist })

export function* rootSaga() {
  yield all([playlistSaga()])
}

export default rootReducer
