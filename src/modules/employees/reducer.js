import {
  SEARCH_EMPLOYEES_REQUESTED,
  SEARCH_EMPLOYEES_SUCCEEDED,
  SEARCH_EMPLOYEES_FAILED,
  DELETE_EMPLOYEES_REQUESTED,
  DELETE_EMPLOYEES_SUCCEEDED,
  DELETE_EMPLOYEES_FAILED,
} from 'modules/employees/actionTypes'

const initialState = {
  searchQuery: '',
  employees: [],
  filters: {
    name: 'asc',
  },
  fetching: false,
}

export default function reducer(state = initialState, { type, payload }) {
  const reducer = {}
  reducer[SEARCH_EMPLOYEES_REQUESTED] = {
    ...state,
    ...payload,
    fetching: true,
  }
  reducer[SEARCH_EMPLOYEES_SUCCEEDED] = {
    ...state,
    ...payload,
    fetching: true,
  }
  reducer[SEARCH_EMPLOYEES_FAILED] = {
    ...state,
    ...payload,
    fetching: true,
  }
  reducer[DELETE_EMPLOYEES_REQUESTED] = {
    ...state,
    ...payload,
    fetching: true,
  }
  reducer[DELETE_EMPLOYEES_SUCCEEDED] = {
    ...state,
    ...payload,
    fetching: true,
  }
  reducer[DELETE_EMPLOYEES_FAILED] = {
    ...state,
    ...payload,
    fetching: true,
  }

  if (reducer[type]) {
    return reducer[type]
  }
  return state
}
