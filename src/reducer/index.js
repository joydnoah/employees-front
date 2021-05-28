import { combineReducers } from 'redux'
import employees from 'modules/employees/reducer'

const reducer = combineReducers({
  employees,
})

export default reducer
