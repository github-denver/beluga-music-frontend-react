import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
// import authorization, { authorizationSaga } from './authorization'
// import user, { userSaga } from './user'
import musicRead, { musicReadSaga } from './music/read'

const rootReducer = combineReducers({ loading, musicRead })

export function* rootSaga() {
  yield all([musicReadSaga()])
}

export default rootReducer
