import { createAction, handleActions } from 'redux-actions'

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = createAction(START_LOADING, (request) => request)
export const finishLoading = createAction(FINISH_LOADING, (request) => request)

const initialState = {}

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => {
      console.log('modules → [loading.js] → action: ', action)

      return {
        ...state,
        [action.payload]: true
      }
    },
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false
    })
  },
  initialState
)

export default loading