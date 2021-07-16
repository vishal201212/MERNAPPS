import { GET_EMPLOYEE_FAIL, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS } from "../constants/employeeConstants"

export const GetemployeeReducer =(state={},action)=>{
    switch(action.type){
        case GET_EMPLOYEE_REQUEST:
            return {loading:true}
        case GET_EMPLOYEE_SUCCESS:
            return {loading:true, response:action.payload}
        case GET_EMPLOYEE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state
    }
}