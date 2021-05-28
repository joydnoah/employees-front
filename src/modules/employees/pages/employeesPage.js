import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import { Icon, Table, Container, Header, Button, Search, Modal } from 'semantic-ui-react'
import { getSearchEmployeesRequested, deleteEmployeesRequested } from 'modules/employees/actions'

const Employees = () => {
  const employees = useSelector((state) => state.employees.employees)
  const filters = useSelector((state) => state.employees.filters)
  const searchQuery = useSelector((state) => state.employees.searchQuery)
  const [open, setOpen] = useState(false)
  const [employee, setEmployee] = useState({})
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      getSearchEmployeesRequested({
        searchQuery,
        filters,
      }),
    )
  }, [])

  const handleSearchChange = (e, data) => {
    dispatch(
      getSearchEmployeesRequested({
        searchQuery: data.value,
        filters,
      }),
    )
  }

  const handleSortByName = () => {
    const newFilters = {
      ...filters,
    }
    if (newFilters.name === 'asc') {
      newFilters.name = 'desc'
    } else {
      newFilters.name = 'asc'
    }
    dispatch(
      getSearchEmployeesRequested({
        searchQuery,
        filters: newFilters,
      }),
    )
  }

  const onDelete = (index) => {
    setOpen(true)
    setEmployee(employees[index])
  }

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployeesRequested({ employee, searchQuery, filters }))
    setOpen(false)
  }

  return (
    <div>
      <Container fluid>
        <Header as='h2'>EMPLOYEES</Header>
        <Table singleLine striped sortable>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                Employees
                <Search placeholder={'Search by name'} showNoResults={false} onSearchChange={handleSearchChange} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={filters.name === 'asc' ? 'ascending' : 'descending'} onClick={handleSortByName}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Hire Date</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employees.map(({ name, title, age, username, hiredate }, index) => (
              <Table.Row key={name}>
                <Table.Cell>
                  <Header as='h4' image>
                    <Header.Content>
                      {name}
                      <Header.Subheader>{title}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>{age}</Table.Cell>
                <Table.Cell>{username}</Table.Cell>
                <Table.Cell>{hiredate}</Table.Cell>
                <Table.Cell collapsing>
                  <Button icon>
                    <Icon name='edit' />
                  </Button>
                  <Button icon>
                    <Icon name='eye' />
                  </Button>
                  <Button onClick={() => onDelete(index)} icon>
                    <Icon name='trash' />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Button icon labelPosition='left' primary size='small'>
                  <Icon name='user' /> Add Employee
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>Delete Employee</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>You are about delete {employee.name}</Header>
            <p>Do you want to delete this employee?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => setOpen(false)}>
            No
          </Button>
          <Button content='Yes' labelPosition='right' icon='checkmark' onClick={handleDeleteEmployee} positive />
        </Modal.Actions>
      </Modal>
    </div>
  )
}

export default Employees
