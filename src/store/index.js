import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'

import logger from 'redux-logger'

const rootReducer = combineReducers({
  education: educationReducer,
  nwork: workReducer,
  honors: honorsReducer,
  certificate: certificateReducer,
  rpofile: profileReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware))
//const store = createStore(rootReducer, applyMiddleware( sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
