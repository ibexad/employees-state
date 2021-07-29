import React, { useState } from 'react';
import { AddEmployee } from '../api/employees';
import Employee from '../model/Employee';
import { Loading } from './Loading';
import * as Styled from './styled';

const employee: Employee = {
    name: '',
    status: 'Added'
  }

interface Props {
  onAddedNewEmployee : (employee: Employee) => void
}

export const EmployeeForm = ({ onAddedNewEmployee }: Props) => {

    const [values, setValues] = useState(employee);
    const [loading, setLoading] = useState(false);

    const onSubmit = (e: any) => {
        setLoading(true);
        e.preventDefault();
        AddEmployee(values).then((response)=>{
          onAddedNewEmployee(response);
        });
        setValues({...values, name: ''});
        setTimeout(() => {
          setLoading(false);
        }, 500);  //FIXME: just for ensuring that loading is displayed
      }

    const onChange = (e: any) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    };

    return(
      <Styled.Row>
        <Styled.Form onSubmit={onSubmit}>
            <Styled.InputName placeholder='Employee Name' type="text" name="name" onChange={onChange} value={values.name} required></Styled.InputName>
            <Styled.ButtonAdd primary type="submit" disabled={loading}>Add</Styled.ButtonAdd>
        </Styled.Form>
        <Loading load={loading} text='inserting...'/>
      </Styled.Row>
    );

}
