import { graph_mutation, graph_query } from 'utils/graphqlUtils.js'
import { EMPLOYEES_SERVICE } from 'envVariables'

export const getEmployees = ({ searchQuery, filters }) => {
  const url = `${EMPLOYEES_SERVICE}/employees/search`
  const query = `
  query {
    getEmployees (name: "${searchQuery}", orderBy: ${filters.name}) {
      id,
      name,
      age,
      username
      title,
      hiredate
    }
  }
  `
  return graph_query({ url, query }).then((res) => {
    return {
      filters,
      searchQuery,
      employees: res.getEmployees,
    }
  })
}

export const deleteEmployee = ({ employee, searchQuery, filters }) => {
  const url = `${EMPLOYEES_SERVICE}/employees/search`
  const query = `
  mutation {
   deleteEmployees(id: "${employee.id}", name: "${searchQuery}", orderBy: ${filters.name}) {
     id,
      name,
      age,
      username
      title
      hiredate
    }
  }
  `
  return graph_mutation({ url, query }).then((res) => {
    return {
      filters,
      searchQuery,
      employees: res.deleteEmployees,
    }
  })
}
