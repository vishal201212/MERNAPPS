import axios from "axios"
import { DELETE_EMPLOYEE_FAIL, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const DeleteemployeeAction =(id)=>{
    return (dispatch)=>{
        dispatch({
            type: DELETE_EMPLOYEE_REQUEST
        })
        const header ={
            headers:{
                'Content-type':'application/json'
            }}
        const body ={id}

        const url="http://localhost:4000/deleteemp"

        axios.delete(url,body,header)
              .then((response)=>{
                  dispatch({
                      type: DELETE_EMPLOYEE_SUCCESS,
                      payload:response
                  })

              })
              .catch((error)=>{
                  dispatch({
                      type: DELETE_EMPLOYEE_FAIL,
                      payload:error
                  })
              })
    }
}