import axios from "axios"
import { EDIT_EMPLOYEE_FAIL, EDIT_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const EditemployeeAction =(id,firstname,lastname,email,phone)=>{
    return (dispatch)=>{
        dispatch({
            type: EDIT_EMPLOYEE_REQUEST
        })

        const header =({
            headers:{
                'Content-type':'application/json'
        }})

        const body={
            id,
            firstname,
            lastname,
            email,
            phone
        }

        const url= "http://localhost:4000/updateemp"

        axios.patch(url,body,header)
             .then((response)=>{
                 dispatch({
                    type: EDIT_EMPLOYEE_SUCCESS,
                    payload:response
                 })
             })
             .catch((error)=>{
                 dispatch({

                    type:EDIT_EMPLOYEE_FAIL,
                    payload:error

                 })
             })
    }
}