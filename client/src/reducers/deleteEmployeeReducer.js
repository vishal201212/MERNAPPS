import { DELETE_EMPLOYEE_FAIL, DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const DeleteemployeeReducer =(state={},action)=>{
    switch(action.type){
        case DELETE_EMPLOYEE_REQUEST:
            return {loading:true}
        case DELETE_EMPLOYEE_SUCCESS:
            return {loading:true, response:action.payload}
        case DELETE_EMPLOYEE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}