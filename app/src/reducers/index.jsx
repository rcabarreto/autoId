import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import { reducer as toastrReducer } from 'react-redux-toastr'
import loaderReducer from './loaderReducer'
import userReducer from './userReducer'
import sequenceReducer from './sequenceReducer'
import errorReducer from './errorReducer'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  loader: loaderReducer,
  error: errorReducer,
  user: userReducer,
  sequence: sequenceReducer,
  toastr: toastrReducer,
})

export default rootReducer
