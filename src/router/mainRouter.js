import React from 'react'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import AppRoute from 'router/route'
import Layout from 'layout/layout'
import Home from 'modules/home/pages/homePage'
import Employees from 'modules/employees/pages/employeesPage'

const MainRouter = ({ store }) => {
  const history = createBrowserHistory()
  return (
    <Router history={history}>
      <AppRoute exact path='/' component={Home} layout={Layout} />
      <AppRoute exact path='/employees' component={Employees} layout={Layout} />
    </Router>
  )
}

export default MainRouter
