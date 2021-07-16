import axios from "axios"
import { GET_EMPLOYEE_FAIL, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const GetemployeeAction =(id,firstname,lastname,email,phone)=>{
    return (dispatch)=>{
        dispatch({
            type: GET_EMPLOYEE_REQUEST
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

        const url= "http://localhost:4000/getemp"

        axios.get(url,body,header)
             .then((response)=>{
                 dispatch({
                    type: GET_EMPLOYEE_SUCCESS,
                    payload:response
                 })
             })
             .catch((error)=>{
                 dispatch({

                    type:GET_EMPLOYEE_FAIL,
                    payload:error

                 })
             })
    }
}