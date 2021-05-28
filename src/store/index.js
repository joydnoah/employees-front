import { all } from 'redux-saga/effects'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from 'reducer'
import employeesSagas from 'modules/employees/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

function* rootSagas() {
  yield all([employeesSagas()])
}

sagaMiddleware.run(rootSagas)

export default store
