import React, { useState } from 'react'
import { ChangeEmployeeState } from '../api/employees'
import Employee from '../model/Employee'
import { Loading } from './Loading'
import * as Styled from './styled'

interface Props {
    employee: Employee;
};

export const EmployeeRow = ({ employee }: Props) => {

    const[state, setState] = useState(employee.status);
    const[loading, setLoading] = useState(false);

    const onChangeState = (_state: string) => {
        if(state !== _state){
            setLoading(true);
            employee.status = _state;
            ChangeEmployeeState(employee).then((response) => {
                setState(response.status);
                setLoading(false);
            })
        }
    }

    return (
        <>
            <Styled.EmployeeName> {employee.name} </Styled.EmployeeName>
            <Styled.EmployeeState>
                <Styled.Item className={state === 'Added' ? 'active' : ''} onClick={()=> onChangeState("Added")}>
                    <Styled.Inner className="state_inner">
                        Approved <Loading load={loading && employee.status === "Added"}/>
                    </Styled.Inner>
                </Styled.Item>
                <Styled.Item className={state === 'In-Check' ? 'active' : ''} onClick={()=> onChangeState("In-Check")}>
                    <Styled.Inner className="state_inner">
                        In-Check <Loading load={loading && employee.status === "In-Check"}/>
                    </Styled.Inner>
                </Styled.Item>
                <Styled.Item className={state === 'Approved' ? 'active' : ''} onClick={()=> onChangeState("Approved")}>
                    <Styled.Inner className="state_inner">
                        Approved <Loading load={loading && employee.status === "Approved"}/>
                    </Styled.Inner>
                </Styled.Item>
                <Styled.Item className={state === 'Active' ? 'active' : ''} onClick={()=> onChangeState("Active")}>
                    <Styled.Inner className="state_inner">
                        Active <Loading load={loading && employee.status === "Active"}/>
                    </Styled.Inner>
                </Styled.Item>
                <Styled.Item className={state === 'Inactive' ? 'active' : ''} onClick={()=> onChangeState("Inactive")}>
                    <Styled.Inner className="state_inner">
                        Inactive <Loading load={loading && employee.status === "Inactive"}/>
                    </Styled.Inner>
                </Styled.Item>
            </Styled.EmployeeState>
        </>
    )
}
