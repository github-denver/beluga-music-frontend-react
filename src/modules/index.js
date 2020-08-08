import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import loading from './loading'
import authorization, { authorizationSaga } from './authorization'
import user, { userSaga } from './user'

const rootReducer = combineReducers({ loading, authorization, user })

export function* rootSaga() {
  yield all([authorizationSaga(), userSaga()])
}

export default rootReducer
