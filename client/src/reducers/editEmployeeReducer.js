import { EDIT_EMPLOYEE_FAIL, EDIT_EMPLOYEE_REQUEST, EDIT_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const EditemployeeReducer =(state={},action)=>{
    switch(action.type){
        case EDIT_EMPLOYEE_REQUEST:
            return {loading:true}
        case EDIT_EMPLOYEE_SUCCESS:
            return {loading:true, response:action.payload}
        case EDIT_EMPLOYEE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}