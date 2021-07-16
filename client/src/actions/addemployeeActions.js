import axios from "axios"
import { ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"


export const AddemployeeAction =(firstname,lastname,email,phone)=>{
    return (dispatch)=>{
        dispatch({
            type: ADD_EMPLOYEE_REQUEST,
        })
        const header =({
            headers:{
                'Content-type':'application/json'
        }})

        const body={
            firstname,
            lastname,
            email,
            phone
        }

        const url= "http://localhost:4000/addemp"

        axios.post(url,body,header)
             .then((response)=>{
                 dispatch({
                    type: ADD_EMPLOYEE_SUCCESS,
                    payload:response
                 })
             })
             .catch((error)=>{
                 dispatch({

                    type:ADD_EMPLOYEE_FAIL,
                    payload:error

                 })
             })
    }
}