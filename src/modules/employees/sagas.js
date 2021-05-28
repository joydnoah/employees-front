import { call, put, takeLatest } from 'redux-saga/effects'
import { getEmployees as getEmployeesAPI, deleteEmployee as deleteEmployeeAPI } from 'modules/employees/services'
import { SEARCH_EMPLOYEES_REQUESTED, DELETE_EMPLOYEES_REQUESTED } from 'modules/employees/actionTypes'
import {
  getSearchEmployeesSucceeded,
  getSearchEmployeesFailed,
  deleteEmployeesSucceeded,
  deleteEmployeesFailed,
} from 'modules/employees/actions'

function* getEmployees({ payload }) {
  try {
    const ownerData = yield call(getEmployeesAPI, { ...payload })
    yield put(getSearchEmployeesSucceeded(ownerData))
  } catch (e) {
    yield put(getSearchEmployeesFailed(e))
  }
}

function* deleteEmployee({ payload }) {
  try {
    const ownerData = yield call(deleteEmployeeAPI, { ...payload })
    yield put(deleteEmployeesSucceeded(ownerData))
  } catch (e) {
    yield put(deleteEmployeesFailed(e))
  }
}

function* saga() {
  yield takeLatest(SEARCH_EMPLOYEES_REQUESTED, getEmployees)
  yield takeLatest(DELETE_EMPLOYEES_REQUESTED, deleteEmployee)
}

export default saga
