import { ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const AddemployeeReducer =(state={},action)=>{
    switch(action.type){
        case ADD_EMPLOYEE_REQUEST:
            return {loading:true}
        case ADD_EMPLOYEE_SUCCESS:
            return {loading:true, response:action.payload}
        case ADD_EMPLOYEE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}