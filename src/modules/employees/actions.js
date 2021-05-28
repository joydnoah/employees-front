import {
  SEARCH_EMPLOYEES_REQUESTED,
  SEARCH_EMPLOYEES_SUCCEEDED,
  SEARCH_EMPLOYEES_FAILED,
  DELETE_EMPLOYEES_REQUESTED,
  DELETE_EMPLOYEES_SUCCEEDED,
  DELETE_EMPLOYEES_FAILED,
} from 'modules/employees/actionTypes'

export const getSearchEmployeesRequested = (payload = {}) => ({
  type: SEARCH_EMPLOYEES_REQUESTED,
  payload,
})

export const getSearchEmployeesSucceeded = (payload = {}) => ({
  type: SEARCH_EMPLOYEES_SUCCEEDED,
  payload,
})

export const getSearchEmployeesFailed = (payload = {}) => ({
  type: SEARCH_EMPLOYEES_FAILED,
  payload,
})

export const deleteEmployeesRequested = (payload = {}) => ({
  type: DELETE_EMPLOYEES_REQUESTED,
  payload,
})

export const deleteEmployeesSucceeded = (payload = {}) => ({
  type: DELETE_EMPLOYEES_SUCCEEDED,
  payload,
})

export const deleteEmployeesFailed = (payload = {}) => ({
  type: DELETE_EMPLOYEES_FAILED,
  payload,
})
