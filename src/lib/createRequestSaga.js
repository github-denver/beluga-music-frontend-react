import { call, put } from 'redux-saga/effects'
import { startLoading, finishLoading } from '../modules/loading'

export const createRequestActionTypes = (type) => {
  console.log('lib → [createRequestSaga.js] → createRequestActionTypes → type: ', type)

  const SUCCESS = `${type}_SUCCESS`
  console.log('lib → [createRequestSaga.js] → createRequestActionTypes → SUCCESS: ', SUCCESS)

  const FAILURE = `${type}_FAILURE`
  console.log('lib → [createRequestSaga.js] → createRequestActionTypes → FAILURE: ', FAILURE)
  console.log('')

  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type, request) {
  console.log('lib → [createRequestSaga.js] → createRequestSaga → type: ', type)
  // console.log('lib → [createRequestSaga.js] → createRequestSaga → request: ', request)

  const SUCCESS = `${type}_SUCCESS`
  console.log('lib → [createRequestSaga.js] → createRequestSaga → SUCCESS: ', SUCCESS)

  const FAILURE = `${type}_FAILURE`
  console.log('lib → [createRequestSaga.js] → createRequestSaga → FAILURE: ', FAILURE)
  console.log('')

  return function* (action) {
    console.log('lib → [createRequestSaga.js] → function* → action: ', action)
    console.log('')

    yield put(startLoading(type))

    try {
      const response = yield call(request, action.payload)
      console.log('lib → [createRequestSaga.js] → function* → response: ', response)
      console.log('')

      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response
      })
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      })
    }

    yield put(finishLoading(type))
  }
}
