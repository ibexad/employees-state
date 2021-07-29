import React, { useEffect, useState } from 'react';
import { AddEmployee, GetEmployees } from './api/employees';
import { EmployeeForm } from './components/EmployeeForm';
import { EmployeeRow } from './components/EmployeeRow';
import { Loading } from './components/Loading';
import * as Styled from './components/styled';
import Employee from './model/Employee';

const App = () => {

  const defaultEmployees: Employee[] = [];
  const [employees, setEmployees] = useState(defaultEmployees);
  const [loading, setLoading] = useState(true);
  const [error, setError ] = useState('');

  useEffect(() => {
        GetEmployees().then(response => {
          setEmployees(response);
          setLoading(false);
      }).catch(ex => {
        const error =
        ex.response.status === 404
          ? "Not found"
          : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  const onAdded = (newEmployee: Employee) =>{
    setEmployees([...employees, newEmployee]);
  }

  return (
    <Styled.Container>
      <EmployeeForm onAddedNewEmployee={onAdded}/>
      <Loading load={loading} text='loading...' />
       <Styled.Grid>
        {employees.map((employee) =>
          <Styled.Row key={employee.id}>
              <EmployeeRow employee={employee}/>
          </Styled.Row>
        )}
      </Styled.Grid>
    </Styled.Container>
  );
}

export default App;
