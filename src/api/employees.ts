import axios from 'axios';
import Employee from '../model/Employee'

const baseURL = 'https://60fa78207ae59c0017166176.mockapi.io/workmotion/';
const api = axios.create({ baseURL });

//GET
export const GetEmployees = async () : Promise<Employee[]> => {
    return new Promise((resolve, reject) => {
        api.get('/employees').then((response) => {
           resolve(response.data);
       }).catch(error => {
           reject(error);
       })
    })
}

//POST
export const AddEmployee = (employee: Employee) : Promise<Employee> => {
    return new Promise((resolve, reject) => {
        api.post('/employees', employee).then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    })
}

//PUT
export const ChangeEmployeeState = (employee: Employee) : Promise<Employee> => {
    return new Promise((resolve, reject) => {
        api.put(`/employees/${employee.id}`, employee).then((response) => {
            resolve(response.data);
        }).catch(error => {
            reject(error);
        })
    })
}
